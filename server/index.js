const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 5050;
const config = require("./config/key.js");

const { Comment } = require("./Model/Comment.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../react-portfolio/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    mongoose.connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../react-portfolio/build/index.html"));
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../react-portfolio/build/index.html"));
});

app.post("/api/comment/write", (req, res) => {
    const data = req.body;
    console.log(data)

    let temp = {
        name: req.body.name,
        password: req.body.password,
        comment: req.body.comment,
    }

    const CommentWirte = new Comment(temp)
    CommentWirte
        .save()
        .then(() => {
            res.status(200).json({ success: true })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})

app.post("/api/comment/list", (req, res) => {
    Comment
        .find()
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, commentList: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false })
        })
})