import BurgerCard from "./BurgerCard";
import { useEffect, useState } from "react";
function FoodSelection() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, [menu]);

  return (
    <div className="grid grid-cols-3 grid-flow-rows gap-10 mt-10">
      {menu.map((burger) => (
        <BurgerCard
          bg="sand"
          key={burger.id}
          title={burger.title}
          description={burger.description}
        />
      ))}
    </div>
  );
}

export default FoodSelection;
