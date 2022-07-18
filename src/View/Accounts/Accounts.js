import React from "react";
import "./scss/accounts-styles.css";
import AccountCard from "../../Components/AccountCard";

const Accounts = () => {
  return (
    <div
      className="accounts"
      style={{
        paddingTop: "60px",
        paddingLeft: "45px",
        backgroundColor: "#E3E3E3",
        height: "100vh",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="row">
        <h3>Instagram</h3>
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
      <div className="row">
        <h3>Twitter - Coming soon!</h3>
      </div>
      <div className="row">
        <h3>TikTok - Coming Soon!</h3>
      </div>
      <div className="row">
        <h3>Facebook - Coming soon!</h3>
      </div>
    </div>
  );
};

export default Accounts;
