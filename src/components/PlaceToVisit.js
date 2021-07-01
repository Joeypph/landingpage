import React from "react";
import { makeStyles } from "@material-ui/core";
import ImageCard from "./ImageCard";
import places from "../static/places";

function PlaceToVisit() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageCard place={places[0]} />
      <ImageCard place={places[1]} />
      <ImageCard place={places[2]} />
      <ImageCard place={places[3]} />
      <ImageCard place={places[4]} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
  },
}));
export default PlaceToVisit;
