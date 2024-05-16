const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  let Users = mongoose.model("user");
  let { email, password } = req.body;

  //validation
  try {
    if (!email) throw "Please Enter Email";
    if (!password) throw "Password can't be empty";
    let getUser = await Users.findOne({
      email: email, //condition to match email
    });

    if (!getUser) throw "Email doesnot exist";
    //comparing password from user to database passowrd
    let match = await bcrypt.compare(password, getUser.password);
    if (!match) throw "Password or user doesn't match";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
    return;
  }

  let getuserToken = await Users.findOne({
    email: email,
  });

  console.log(getuserToken);

  //making acess token
  const accessToken = jwt.sign(
    {
      _id: getuserToken._id,
      name: getuserToken.name,
      email: getuserToken.email,
    },
    process.env.jwt_key,
    {
      expiresIn: "90 days",
    }
  );

  //sucess
  res.status(200).cookie("check", getuserToken).json({
    messege: "user logged in sucessfully",
    data: accessToken,
  });
};

module.exports = userLogin;
