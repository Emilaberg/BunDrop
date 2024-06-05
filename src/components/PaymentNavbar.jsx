import { Link } from "react-router-dom";
import Icon from "../assets/images/icons/Icon.svg";

function PaymentNavbar() {
  return (
    <nav className="flex items-center bg-netsblue py-5">
      <Link
        className="mx-auto"
        to="/"
      >
        <img
          className="w-[40px] h-[40px] "
          src={Icon}
          alt=""
        />
      </Link>
    </nav>
  );
}

export default PaymentNavbar;
