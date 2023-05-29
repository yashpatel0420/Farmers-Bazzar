import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/cart/cart.reducer";

export default function App({ coast, method }) {
  const dispatch = useDispatch();

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AX99_D2TaftZYU1n-kbVo3bUiGo6bTECa-I6NOYYEB2u0nwf9dVAn-fa4aZnyyZeQT4xSdpuwoTyxgtL",
        currency: "CAD",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: coast(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            if (details.status === "COMPLETED") {
              dispatch(emptyCart());
              method();
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
