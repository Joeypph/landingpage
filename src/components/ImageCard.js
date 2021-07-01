import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fonstSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fonstSize: "1.1rem",
    color: "#ddd",
  },
});
function ImgCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        alt="Contemplative Reptile"
        height="140"
        className={classes.media}
        component="img"
        image={place.imageUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          gutterBottom
          component="h1"
          variant="h5"
          className={classes.title}
        >
          {place.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {place.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default ImgCard;
