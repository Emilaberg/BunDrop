import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import PaymentNavbar from "./components/PaymentNavbar";
import { useEffect, useState } from "react";
import PaymentPage from "./pages/PaymentPage";

function App() {
  // checkar om man är på betalningsidan och visar då navbaren.

  const [check, setCheck] = useState(false);
  // förhindrar så att man inte kan nå betalningsidan genom bara url, buggig som faAn
  const [ongoingOrder, setOngoingOrder] = useState(false);

  return (
    <Router>
      {/* KOMMER VISAS PÅ ALLA SIDOR */}
      {check ? <PaymentNavbar /> : <Navbar />}

      {/* KOMMER VISAS PÅ ALLA SIDOR */}

      {/* Routes på sidan */}
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
        ></Route>
        <Route
          path="/meny"
          element={<MenuPage />}
        ></Route>
        <Route
          path="/min-order"
          element={
            <OrderPage
              ongoingOrder={ongoingOrder}
              setOngoingOrder={setOngoingOrder}
            />
          }
        ></Route>
        <Route
          path="/betalning"
          element={
            <PaymentPage
              check={check}
              setCheck={setCheck}
              ongoingOrder={ongoingOrder}
            />
          }
        ></Route>

        {/* ERROR MÅSTE VARA SIST */}
        <Route
          path="*"
          element={<ErrorPage />}
        ></Route>
      </Routes>

      {check ? "" : <Footer />}
    </Router>
  );
}

export default App;
