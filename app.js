// const express = require("express");  commonjs

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/hola", (req, res) => {
    res.json({ msg: "hola mundo con json" });
});
app.get("/chaos", (req, res) => {
    res.json({ msg: "chaos mundo con json" });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
