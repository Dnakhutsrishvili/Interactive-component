import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      onClick={() => {
        props.submited(props.num);
      }}
      className={classes.btn}
    >
      {props.num}
    </button>
  );
}

export default Button;
