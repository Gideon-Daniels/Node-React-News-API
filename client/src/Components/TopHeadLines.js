import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TopHeadLine from "./TopHeadline";
import "../styles/App.css";

const TopHeadLines = () => {
  // states
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let [query, setQuery] = useState("");

  useEffect(() => {
    if (query != "") {
      getArticles();
    } else {
      getTopHeadLines();
    }
  }, [query]);

// --- Fetch From API
  const getTopHeadLines = async () => {
    const response = await fetch("http://localhost:8080/top-headlines");
    const data = await response.json();
    console.log(data.articles);
    setData(data.articles);
  };

  const getArticles = async () => {
    const response = await fetch(`http://localhost:8080/everything/${query}`);
    const data = await response.json();
    console.log("Searched", data.articles);
    console.log(query);
    setData(data.articles);
  };
//---------------- Form Functionality
  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSearchTerm = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  const resetQuery = () => {
    setSearchTerm("");
    setQuery("");
  };

  return (
    <Box
      p={5}
      style={{
        background: "#0072bb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems:"center",
      }}
    >
     <h1>NEWS API DEMO</h1>
      <Grid
        p={2}
        container
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
      >
        <form className="search-form" onSubmit={getSearchTerm}>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
          <button type="submit">Search</button>
          <button type="reset" onClick={resetQuery}>
            reset
          </button>
        </form>
      </Grid>
      <Grid container spacing={2}>
        {data.map((article) => (
          <Grid container item xs={12} sm={6} md={4} lg={4}>
            <TopHeadLine
              key={article.title}
              author={article.author}
              content={article.content}
              description={article.description}
              source={article.source}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopHeadLines;
