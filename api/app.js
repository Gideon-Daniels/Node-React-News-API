const express = require("express");
const fetch = require("node-fetch");
// import { data } from "../Gateway/allArticles";

const app = express();
const apiKey = "5236a567a3774677b151f9ab897c37a0";

app.get("/top-headlines", async (req, res) => {
  // res.set("Access-Control-Allow-Origin", "*");
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5236a567a3774677b151f9ab897c37a0`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.json(data);
});

app.listen("8080", () => console.log("Listening on 8080"));
