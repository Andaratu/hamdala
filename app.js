const express = require("express");

const app = express();

const bodyparser = require("body-parser");


app.use(bodyparser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({ "name": "john Doe" });
});

app.post("/user", (req, res) => {
    res.send({ name: "john" });
});


app.listen(port, () => {
    console.log('app running on port ' + port);
})
