import "./button.css";

const Button = (props) => {
  return (
    <>
      <div className="raised round-ish view-padding">{props.text}</div>
    </>
  );
};

export default Button;
