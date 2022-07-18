import React from "react";
import Slider from "../../Components/Slider";
import "./scss/settings-styles.css";
import Button from "../../Components/Button";

const Settings = () => {
  let payment = "credit";

  return (
    <>
      <div
        style={{
          paddingTop: "60px",
          paddingLeft: "45px",
          backgroundColor: "#E3E3E3",
          height: "100vh",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>PAYMENT SETTINGS</h1>
        <h1>@USERNAME</h1>
        <p>
          <em>update username for @username</em>
        </p>
        <div
          className="row justify-content-center"
          style={{ alignContent: "center" }}
        >
          <div className="col-4"> </div>
          <div className="col-4">
            Debit/Credit&nbsp;
            <Slider />
            &nbsp;PayPal{" "}
          </div>

          <div className="col-4"> </div>
        </div>
        <div className="row">
          {payment == "credit" ? (
            <>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />{" "}
            </>
          ) : (
            <>PaypalButton</>
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
