import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableStripeKey =
    "pk_test_51J2e5xDdstQY4q5oEj99kEUVRbImfFhZPlCRhrDaX36d7f3Tv17Pdu7npzwjgbmzOOc52fwMofVEkfLUCjZtn4Bl006Rq5q1XM";
  const onToken = (token) => {
    console.log(token);
    alert("Payments successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-Shop Inc."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      allowRememberMe
      token={onToken}
      stripeKey={publishableStripeKey}
    />
  );
};

export default StripeCheckoutButton;
