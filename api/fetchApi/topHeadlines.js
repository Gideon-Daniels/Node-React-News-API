const fetch = require("node-fetch");

const getHeadlines = async (apiKey) => {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=sa&apiKey=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(apiKey)
};

module.exports = getHeadlines;
