const express = require("express");
const app = express();
const noticeRoute = require("./routes/NoticeRoute");
const userRoute = require("./routes/UserRoute");
require('dotenv').config()
const config = require('./config');

app.use(express.json());

app.use("/notice", noticeRoute);
app.use("/user", userRoute);

app.listen(config.server.port, config.server.host, () => {
    console.info(`Your application works on port ${config.server.port}`);
});
