import React, { useEffect, useState } from "react";
import {
  makeStyles,
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar classname={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My <span className={classes.colorText}>Island</span>
          </h1>
          <IconButton className={classes.icon}>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My{" "}
            <span className={classes.colorText}>Island</span>
          </h1>
          <IconButton className={classes.icon}>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  appbar: {
    background: "none",
  },
  icon: {
    color: "#fff",
    fontSize: "3rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#008000",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#008000",
    fontSize: "4rem",
  },
}));

export default Header;
