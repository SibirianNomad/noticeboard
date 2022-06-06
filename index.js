const express = require("express");
const app = express();
const noticeRoute = require("./routes/NoticeRoute");
const userRoute = require("./routes/UserRoute");
const config = require('./config');
;

app.use(express.json());

app.use("/api/notice", noticeRoute);
app.use("/api/user", userRoute);

app.listen(config.server.port, config.server.host, () => {
    const {port, host} = config.server;
    console.info(`Your application works on host ${host} with port ${port}`);
});
