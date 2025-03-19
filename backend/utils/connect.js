const mongoose = require("mongoose");
const connectDataBasse = () => {
  try {
    mongoose.connect("mongodb+srv://alibahridev:6UpTbcWa3cC7F7MV@cluster0.4gdvs.mongodb.net/").then(() => {
      console.log("we can connect");
    });
  } catch {
    console.log("problem here of login");
  }
};
module.exports = connectDataBasse;