import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

function Subtotal() {
  const history = useNavigate();

  // const handleButtonClick = () => {
  //   Navigate("/payment");
  // };

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history("/payment")}>Proceed to Checkout</button>
      {/* <Button variant="primary" onClick={handleButtonClick}>
        Proceed to Checkout
      </Button> */}
    </div>
  );
}

export default Subtotal;
