import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./CheckOut";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";

const stripePromise = loadStripe(
  "pk_test_51OJJEGSIUYLugVVedRbeBt9PMY1ONlG5SHkD1S9RxNczyhoDM9909PrrtIHGV8Z8Z16DgI1J393jHKTtVjuEjBR700uOLAoLrl"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/order" element={<Order />} />
          {/* <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

{
  /* <Route path="/">
  <Header />
  <Home />
</Route> */
}
