import React from "react";
import Slider from "../../Components/Slider";
import "./scss/settings-styles.css";
import Button from "../../Components/Button";

const InstagramConfig = () => {
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
        <h1>@USERNAME</h1>
        <p>
          <em>update username for @username</em>
        </p>
        <hr />
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

        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-2"> </div>

          <div className="col-4">
            <p>Look-Alike Text Box</p>
            <textarea
              type="textarea"
              className=" inset round-ish"
              style={{ width: "100%", height: "100%", resize: "none" }}
            ></textarea>
          </div>
          <div className="col-4">
            <p>Black-List Text Box</p>
            <textarea
              type="textarea"
              className=" inset round-ish"
              style={{ width: "100%", height: "100%", resize: "none" }}
            ></textarea>
          </div>
          <div className="col-2"> </div>
        </div>

        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-2"> </div>
          <div className="col-4">
            <p>White-List Text Box</p>
            <textarea
              type="textarea"
              className=" inset round-ish"
              style={{ width: "100%", height: "100%", resize: "none" }}
            ></textarea>
          </div>
          <div className="col-4">
            <p>Comments Text Box</p>
            <textarea
              type="textarea"
              className=" inset round-ish"
              style={{ width: "100%", height: "100%", resize: "none" }}
            ></textarea>
          </div>
          <div className="col-2"> </div>
        </div>

        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-2"> </div>
          <div className="col-4">
            <p>Direct Messages Text Box</p>
            <textarea
              type="textarea"
              className=" inset round-ish"
              style={{ width: "100%", height: "100%", resize: "none" }}
            ></textarea>
          </div>
          <div className="col-4">
            <p>Comments Text Box</p>
            <textarea
              type="textarea"
              className=" inset round-ish"
              style={{ width: "100%", height: "100%", resize: "none" }}
            ></textarea>
          </div>
          <div className="col-2"> </div>
        </div>
        <br />
        <br />
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
                <Button text="Save&nbsp;&amp;&nbsp;Exit" />
              </div>
              <div className="col">
                <Button text="Discard&nbsp;Changes" />
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default InstagramConfig;
