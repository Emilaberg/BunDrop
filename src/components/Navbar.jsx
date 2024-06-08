import { Link } from "react-router-dom";
import navIcon from "../assets/images/icons/Icon.svg";
import f_icon from "../assets/images/icons/facebook-f.svg";
import i_icon from "../assets/images/icons/instagram.svg";
import cartIcon from "../assets/images/icons/cart.svg";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [time, setTime] = useState(new Date());
  const [cartHidden, setCartHidden] = useState(false);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  function tick() {
    setTime(new Date());
  }

  //EXTRACT CHANGES FROM LOCALSTORAGE TO HOOK SÅ ATT JAG KAN ANVÄNDA DET I BÅDE NAVBAR OCH I BURGERCARD.

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

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

        <div className="flex w-[119px] justify-evenly items-center">
          <span className="relative ">
            <img
              src={cartIcon}
              alt="cart"
              className="w-[26px] text-white cursor-pointer"
              onClick={() => setCartHidden(!cartHidden)}
            />
            {/* containern */}
            <div
              className={`absolute z-10 right-0 py-5 px-2 bg-white ${
                cartHidden ? "" : "hidden"
              }`}
            >
              {cart.map((cartItem) => (
                <div
                  key={cartItem.item_id}
                  className="flex items-center w-max mt-2"
                >
                  <div className="flex">
                    <span>-</span>
                    <span>{cartItem.item_id}</span>
                  </div>
                  <div className="ml-10">89,90 kr</div>
                  <div className="flex ml-2 items-center border-2 border-solid border-midnightblack rounded-xl px-2">
                    <div>-</div>
                    <span className="mx-2">{cartItem.count}</span>
                    <div>+</div>
                  </div>
                </div>
              ))}
              {/* items */}
              <div className="flex items-center w-max mt-2">
                <div className="flex">
                  <span>-</span>
                  <span>Chicken Creole</span>
                </div>
                <div className="ml-10">89,90 kr</div>
                <div className="flex ml-2 items-center border-2 border-solid border-midnightblack rounded-xl px-2">
                  <div>-</div>
                  <span className="mx-2">1</span>
                  <div>+</div>
                </div>
              </div>
              <div className="flex items-center w-max mt-2">
                <div className="flex">
                  <span>-</span>
                  <span>Chicken Creole</span>
                </div>
                <div className="ml-10">89,90 kr</div>
                <div className="flex ml-2 items-center border-2 border-solid border-midnightblack rounded-xl px-2">
                  <div>-</div>
                  <span className="mx-2">1</span>
                  <div>+</div>
                </div>
              </div>
              <div className="flex items-center w-max mt-2">
                <div className="flex">
                  <span>-</span>
                  <span>Chicken Creole</span>
                </div>
                <div className="ml-10">89,90 kr</div>
                <div className="flex ml-2 items-center border-2 border-solid border-midnightblack rounded-xl px-2">
                  <div>-</div>
                  <span className="mx-2">1</span>
                  <div>+</div>
                </div>
              </div>
            </div>
          </span>
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
