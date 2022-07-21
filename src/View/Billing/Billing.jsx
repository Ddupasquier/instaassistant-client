/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Slider } from '../../Components/Slider';
import './scss/billing-styles.css';

function Billing() {
  return (
    <div className="billing-container">
      <div className="head">
        <h1>PAYMENT SETTINGS</h1>
        <h1>@USERNAME</h1>
        <p>
          <em>update username for @username</em>
        </p>
      </div>

      <div className="billing-main">
        <div>
          <div className="payment-options">
            Debit/Credit&nbsp;
            <Slider />
            &nbsp;PayPal{' '}
          </div>
          <div className="billing-form">
            <form>
              <input type="text" placeholder="Card Number" />
              <br />
              <input type="text" placeholder="Name on Card" />
              <br />
              <input type="text" placeholder="Expiration Date" />
              <br />
              <input type="text" placeholder="CVV" />
              <br />
              <button type="submit" className="button outset billing-button">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  // <>
  //   <div
  //     style={{
  //       paddingTop: "60px",
  //       paddingLeft: "45px",
  //       backgroundColor: "#E3E3E3",
  //       height: "100vh",
  //       justifyContent: "center",
  //       textAlign: "center",
  //     }}
  //   >
  //     <h1>PAYMENT SETTINGS</h1>
  //     <h1>@USERNAME</h1>
  //     <p>
  //       <em>update username for @username</em>
  //     </p>
  //     <div
  //       className="row justify-content-center"
  //       style={{ alignContent: "center" }}
  //     >
  //       <div className="col-4"> </div>
  //       <div className="col-4">
  //         Debit/Credit&nbsp;
  //         <Slider />
  //         &nbsp;PayPal{" "}
  //       </div>

  //       <div className="col-4"> </div>
  //     </div>
  //     <div className="row">
  //       {payment === "credit" ? (
  //         <>
  //           <input type="text" />
  //           <input type="text" />
  //           <input type="text" />
  //           <input type="text" />
  //           <input type="text" />{" "}
  //         </>
  //       ) : (
  //         <>PaypalButton</>
  //       )}
  //     </div>
  //   </div>
  // </>
  );
}

export default Billing;
