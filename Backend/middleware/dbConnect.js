const dbConnect = (uri) => {
  const mongoose = require("mongoose");

  mongoose
    .connect(uri, {})
    .then(() => {
      console.log("Database connection was sucessfull !");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = dbConnect;
