import React from "react";
import "./Payment.css";
import StripeCheckout from "react-stripe-checkout";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Payment = () => {
  function handleToken(token, address) {}
  const [{ basket }] = useStateValue();

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <div className="payment">
            <Link to="/">
              <img
                className="payment__image"
                src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
                alt="amazon"
              />
            </Link>
            <div className="payment__container">
              <h1>Payment Info</h1>
              <form action="">
                <h5 className="payment__label">
                  Total Items : {basket.length}{" "}
                </h5>
                <h5 className="payment__label">Total Amount : {value}</h5>
              </form>
              <p className="payment__terms">
                ℹ You can review this order before it's final.
              </p>
              <Link to="/checkout">
                <button className="payment__toCart">Go Back to Cart</button>
              </Link>
              <StripeCheckout
                stripeKey="pk_test_51Ig6ZQSEVybBKWtCpykPMQDjcN6Au2yzk4SoImrM9OoBPSQ5GLI45yWtvo9zKU4rsFteSiRtrZwUg9x0W4wRP0Fa00OlDS5iic"
                token={handleToken}
                amount={value}
              />
              <p className="payment__terms">
                ℹ Pay faster for all your shopping needs with{" "}
                <b>Amazon Pay balance</b>
              </p>
            </div>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
};

export default Payment;
