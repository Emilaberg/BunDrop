import BurgerCard from "./BurgerCard";

function Trending() {
  return (
    <div className="text-center text-white py-[50px] mt-44 mx-[170px] bg-gradient-to-br from-bgblue from-3% to-orange to-100% rounded-[46px]">
      <h1 className="mb-10 text-2xl">Våra populära burgare</h1>
      <div className="flex justify-evenly">
        <BurgerCard />
        <BurgerCard />
        <BurgerCard />
      </div>
    </div>
  );
}

export default Trending;
