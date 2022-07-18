import React from "react";
import Slider from "../../Components/Slider";
import "./scss/settings-styles.css";
import Button from "../../Components/Button";

const Settings = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "60px",
          paddingLeft: "45px",
          backgroundColor: "#E3E3E3",
          height: "100vh",
        }}
      >
        <h1>@USERNAME</h1>
        <p>
          <em>update username for @username</em>
        </p>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2">
            <Slider name="follows" />
          </div>
          <div className="col-2">
            <Slider name="follows" />
          </div>
          <div className="col-2">
            <Slider name="follows" />
          </div>
          <div className="col-2">
            <Slider name="follows" />
          </div>
          <div className="col-2"></div>
        </div>
        <br />

        <div className="row">
          <div className="col-2"> </div>
          <div className="col-4 inset round-ish" style={{ height: "80px" }}>
            Look-Alike Text Box
          </div>
          <div className="col-4 inset round-ish" style={{ height: "80px" }}>
            Black-List Text Box{" "}
          </div>
          <div className="col-2"> </div>
        </div>
        <div className="row">
          <div className="col-2"> </div>
          <div className="col-4 inset round-ish" style={{ height: "80px" }}>
            White-List Text Box{" "}
          </div>
          <div className="col-4 inset round-ish" style={{ height: "80px" }}>
            Comments Text Box
          </div>
          <div className="col-2"> </div>
        </div>
        <div className="row">
          <div className="col-2"> </div>
          <div className="col-4 inset round-ish" style={{ height: "80px" }}>
            Direct Messages Text Box{" "}
          </div>
          <div className="col-4 inset round-ish" style={{ height: "80px" }}>
            Comments Text Box{" "}
          </div>
          <div className="col-2"> </div>
        </div>
        <br />

        <div className="row">
          <div className="col-2"></div>
          <div className="col-4"> </div>
          <div className="col-4">
            <div className="row">
              <div className="col">
                <Button text="SAVE" />
              </div>
              <div className="col">
                <Button text="Save &amp; Exit" />
              </div>
              <div className="col">
                <Button text="Discard Changes" />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default Settings;
