/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Button, Input, Switch, Text } from "@nextui-org/react";
import "./scss/billing-styles.css";

function Billing() {
  return (
    <div className="billing-container">
      <div className="head">
        <h3>PAYMENT SETTINGS</h3>
        <Text h4>
          Marcus Bot does not save any credit card information. We bill through
          paypal or through the secure third party Stripe.
        </Text>
      </div>

      <div className="billing-main">
        <div className="payment-options">
          Card&nbsp;
          <Switch size="lg" />
          &nbsp;PayPal{" "}
        </div>
        <form>
          <Input type="text" placeholder="Card Number" />
          <br />
          <Input type="text" placeholder="Name on Card" />
          <br />
          <Input type="text" placeholder="Expiration Date" />
          <br />
          <Input type="text" placeholder="CVV" />
          <br />
          <Button color="success" className="billing-button">
            Save
          </Button>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            width="100%"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="ZJDHY5W5G3G7A"
            />
            <table>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="" />
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
                    <option value="Monthly">
                      Monthly : $99.99 USD - monthly
                    </option>
                    <option value="Yearly">
                      Yearly : $1,000.00 USD - yearly
                    </option>
                  </select>{" "}
                </td>
              </tr>
            </table>
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </form>
      </div>
    </div>
  );
}

export default Billing;
