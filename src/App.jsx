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
import OrderConfirmedPage from "./pages/OrderConfirmedPage";

function App() {
  // checkar om man är på betalningsidan och visar då navbaren.

  // förhindrar så att man inte kan nå betalningsidan genom bara url, buggig som faAn
  const [ongoingOrder, setOngoingOrder] = useState(false);

  return (
    <Router>
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
          element={<OrderPage setOngoingOrder={setOngoingOrder} />}
        ></Route>
        <Route
          path="/betalning/:paymentMethod/:orderId"
          element={<PaymentPage ongoingOrder={ongoingOrder} />}
        ></Route>
        <Route
          path="/order-confirmation/:orderId"
          element={<OrderConfirmedPage />}
        ></Route>

        {/* ERROR MÅSTE VARA SIST */}
        <Route
          path="*"
          element={<ErrorPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
