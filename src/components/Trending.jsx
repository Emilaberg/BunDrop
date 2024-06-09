import BurgerCard from "./BurgerCard";
import { useState, useEffect } from "react";
import Localstorage from "../hooks/Localstorage";

function Trending() {
  const [menu, setMenu] = useState([]);
  const dbHook = Localstorage();

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, [menu]);

  return (
    <div className="text-center text-white py-[50px] mt-44 mx-[170px] bg-gradient-to-br from-bgblue from-3% to-orange to-100% rounded-[46px]">
      <h1 className="mb-10 text-2xl">Våra populära burgare</h1>
      <div className="flex justify-evenly gap-3">
        {menu.slice(0, 3).map((burger) => (
          <BurgerCard
            key={burger.id}
            item={burger}
            dbHook={dbHook}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
