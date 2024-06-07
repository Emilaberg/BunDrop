import BurgerCard from "./BurgerCard";
function FoodSelection({ menu, filteredMenu }) {
  return (
    <div className="grid grid-cols-3 grid-flow-rows gap-10 mt-10">
      {filteredMenu
        ? filteredMenu.map((burger) => (
            <BurgerCard
              bg="sand"
              key={burger.id}
              title={burger.title}
              description={burger.description}
            />
          ))
        : menu
        ? menu.map((burger) => (
            <BurgerCard
              bg="sand"
              key={burger.id}
              title={burger.title}
              description={burger.description}
            />
          ))
        : ""}
    </div>
  );
}

export default FoodSelection;
