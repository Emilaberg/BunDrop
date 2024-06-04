import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <>
      <Link to="/">Fly Cart 30</Link>
      <Link to="/meny">Vår meny</Link>
      {/* <Link to="#orderHere">Beställ här</Link> */}
      <a href="#orderHere">Beställ här</a>
      <Link to="/min-order">Min order</Link>
    </>
  );
}

export default NavLinks;
