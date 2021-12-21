import React from "react";
import StripeCheckout from "react-stripe-checkout";
import ENV from "../../services/env";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payments successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="x-Shopper Inc."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      allowRememberMe
      token={onToken}
      stripeKey={ENV.publishableStripeKey}
    />
  );
};

export default StripeCheckoutButton;
