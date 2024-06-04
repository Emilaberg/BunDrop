import Searchbar from "../components/Searchbar";
import FoodSelection from "../components/FoodSelection";
function MenuPage() {
  return (
    <div className="bg-midnightblack px-[227px] pt-96 pb-80">
      {/* search component */}
      <Searchbar />

      <FoodSelection />
    </div>
  );
}

export default MenuPage;
