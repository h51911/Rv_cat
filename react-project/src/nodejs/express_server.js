const express = require('express');
const {
    PORT
} = require("./config.json");
const app = express();

let allRouter = require('./router/index');

app.use(express.static('./'));

app.use(allRouter);

app.listen(PORT, () => {
    console.log(`开启服务器，正在访问localhost:${PORT}`);
});