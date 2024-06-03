import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      {/* KOMMER VISAS PÅ ALLA SIDOR */}
      <Navbar />

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
          element={<OrderPage />}
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
