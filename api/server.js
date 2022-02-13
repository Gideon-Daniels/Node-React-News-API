const express = require("express");
const fetch = require("node-fetch");
const { port, apiKey } = require("./config");
const app = express();

app.get("/top-headlines", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=sa&apiKey=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  res.json(data);
});

app.get("/everything/:searchTerm", async (req, res) => {
  const searchTerm = req.params.searchTerm;
  res.set("Access-Control-Allow-Origin", "*");
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  res.json(data);
});

app.listen(port, () => console.log("Listening on 8080"));
