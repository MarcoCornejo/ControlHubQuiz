const express = require("express");
const app = express();

const startApp = require('./app');

app.listen(3000, () => {
 console.log("Server running on port 3000");
 startApp(app);
});