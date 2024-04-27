const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const User = mongoose.model("user");
  if (!name || !email || !password) {
    return res.status(400).send("Field can't be left empty");
  }

  //encryption of password using bcrypt
  const encPassword = await bcrypt.hash(password, 10);
  try {
    const data = await User.create({
      name,
      email,
      password: encPassword,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(200).json("Sucessfully registered");
};

module.exports = userRegister;
