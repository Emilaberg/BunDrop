import { Link } from "react-router-dom";
import navIcon from "../assets/images/icons/Icon.svg";
import f_icon from "../assets/images/icons/facebook-f.svg";
import i_icon from "../assets/images/icons/instagram.svg";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [time, setTime] = useState(new Date());

  function tick() {
    setTime(new Date());
  }

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });

  const alertMessage = "Kolla in vår nya sortiment av burgare ";
  return (
    <div className="w-full">
      {/* Alert banner */}
      <div className="px-[19px] flex justify-between items-center bg-midnightblack h-[33px]">
        <div className="text-white w-[40px]">{time.toLocaleTimeString()}</div>
        <div className="text-white">{alertMessage}</div>
        <button className="text-white">Logga in</button>
      </div>
      {/* navbar */}
      <nav className="flex justify-center items-center h-[100px] w-full px-[77px] bg-gradient-to-r from-bgblue from-3% to-orange to-100%">
        <div>
          <Link to="/">
            <img
              src={navIcon}
              alt="icon bild"
              className=" h-[85px] w-[85px]"
            />
          </Link>
        </div>
        <div className="uppercase text-white flex gap-5 mx-auto">
          <NavLinks />
        </div>

        <div className="flex w-[119px] justify-between">
          <Link to="/">
            <img
              src={f_icon}
              alt="facebook"
              className="w-[18px]"
            />
          </Link>
          <Link to="/">
            <img
              src={i_icon}
              alt="instagram"
              className="w-[30px]"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
