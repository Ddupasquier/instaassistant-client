import "./scss/button-styles.css";

const Button = (props) => {
  return (
    <>
      <div className="outset button">{props.text}</div>
    </>
  );
};

export default Button;
