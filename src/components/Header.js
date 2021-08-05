import React, { useEffect, useState } from "react";
import { makeStyles, AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { API } from "aws-amplify";
import { loadStripe } from "@stripe/stripe-js";
Amplify.configure(awsconfig);

function Header() {
  const stripePromise = loadStripe("pk_test_RuZc6Tx020hq9t52aCdSCA1e009KAiezMM");

  const redirectToCheckout = async () => {
    const fetchSession = async () => {
      const apiName = "stripeAPI";
      const apiEndpoint = "/checkout";

      const session = await API.post(apiName, apiEndpoint);
      return session;
    };
    const session = await fetchSession();
    const stripe = await stripePromise;
    console.log("la sesion", session);
    stripe.redirectToCheckout({ sessionId: session.id });
  };
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My <span className={classes.colorText}>Island</span>
          </h1>
          <IconButton className={classes.icon}>
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorText}>Island</span>
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
            <IconButton className={classes.icon}>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
          <button onClick={redirectToCheckout}>Continue to payment</button>
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
