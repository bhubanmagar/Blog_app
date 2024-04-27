const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const getAuthHeaders = req.headers.authorization;
  if (!getAuthHeaders) {
    res.status(401).json({
      status: " Authorization failed",
      messege: "please login first!",
    });
    return;
  }

  const getToken = getAuthHeaders.split("Bearer ")[1];

  try {
    const checkToken = await jwt.verify(getToken, process.env.jwt_key);
    console.log(checkToken);
    req.user = checkToken;
    if (!checkToken) throw "Authorization failed";
  } catch (error) {
    res.status(401).json({
      status: " Authorization failed",
      Message: error.message,
    });
    return;
  }

  //sucess then...
  next();
};

module.exports = auth;
