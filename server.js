const express = require("express");
const http = require("http");
const app = express();
const port = process.env.PORT || 3000;
require("./app");

app.get("/", (req, res) => {
    res.send("connect");
});

app.get("/about", (req, res) => {
    res.send([{
        id: 1,
        name: "deepak"
    }]);
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
