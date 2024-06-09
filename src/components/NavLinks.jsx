import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <Link to="/">Fly Cart 30</Link>
      <Link to="/meny">Beställ här</Link>
      <a href="/#orderHere">Trending</a>
      <Link to="/min-order">Min order</Link>
    </>
  );
}

export default NavLinks;
