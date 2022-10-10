import classes from "./Rate.module.css";
import star from "../assets/images/icon-star.svg";
import Button from "./Button";

function Rate(props) {
  return (
    <div className={classes.container}>
      <div className={classes.starContainer}>
        <img src={star} alt="star"></img>
      </div>
      <h1 className={classes.question}>How did we do?</h1>
      <p className={classes.paragraph}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={classes.btnFlex}>
        <Button num={1} submited={props.setState}></Button>
        <Button num={2} submited={props.setState}></Button>
        <Button num={3} submited={props.setState}></Button>
        <Button num={4} submited={props.setState}></Button>
        <Button num={5} submited={props.setState}></Button>
      </div>
      <div className={classes.flex}>
        <button
          onClick={() => {
            props.hendeler(true);
          }}
          className={classes.submit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Rate;
