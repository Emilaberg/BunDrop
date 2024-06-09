import BurgerCard from "./BurgerCard";
import Localstorage from "../hooks/Localstorage";
import { useEffect } from "react";

function FoodSelection({ menu, filteredMenu }) {
  let dbHook = Localstorage();

  // useEffect(() => {})
  return (
    <div className="grid grid-cols-3 grid-flow-rows gap-10 mt-10">
      {filteredMenu.length
        ? filteredMenu.map((burger) => (
            <BurgerCard
              bg="sand"
              key={burger.id}
              item={burger}
              dbHook={dbHook}
            />
          ))
        : menu.length
        ? menu.map((burger) => (
            <BurgerCard
              bg="sand"
              key={burger.id}
              item={burger}
              dbHook={dbHook}
            />
          ))
        : ""}
    </div>
  );
}

export default FoodSelection;
