const fetch = require("node-fetch");
const apiKey = "5236a567a3774677b151f9ab897c37a0";

const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
const fetchResponse = await fetch(apiUrl);
const data = await fetchResponse.json();

export { data };


