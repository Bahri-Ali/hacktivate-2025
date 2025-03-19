const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const connectDataBasse = require("./utils/connect.js");
connectDataBasse();

app.use(express.json());
app.use("/user", userRoute);

app.listen(4000, () => {});
