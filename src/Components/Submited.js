import React from "react";
import classes from "./Submited.module.css";
import thanks from "../assets/images/illustration-thank-you.svg";

function Submited(props) {
  return (
    <div className={classes.container}>
      <img src={thanks} alt="thanks"></img>
      <div className={classes.cont}>
        <p className={classes.text}>You selected {props.num} out of 5</p>
      </div>
      <h2 className={classes.thanks}>Thank you!</h2>
      <p className={classes.paragraph}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Submited;
