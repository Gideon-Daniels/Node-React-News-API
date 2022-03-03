import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const TopHeadLine = ({
  description,
  title,
  url,
  urlToImage,
}) => {
  return (
    <Card sx={{width: 370 ,maxWidth: 500, minHeight: 400 , padding:2, display: 'flex', flexDirection: "column" , justifyContent: "space-between"}}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <CardMedia component="img" height="140" src={urlToImage} alt="image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link href={url} underline="none" variant="button" target="_blank">
          Read More
        </Link>
      </CardActions>
    </Card>
  );
};

export default TopHeadLine;
