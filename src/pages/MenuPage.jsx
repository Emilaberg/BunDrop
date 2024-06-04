import Searchbar from "../components/Searchbar";
import FoodSelection from "../components/FoodSelection";
function MenuPage() {
  return (
    <div className="bg-midnightblack px-[227px] pt-96 pb-80 bg-[url(../src/assets/images/backgrounds/shadows_blobs_2.svg)] bg-no-repeat bg-cover bg-center">
      {/* search component */}
      <Searchbar />

      <FoodSelection />
    </div>
  );
}

export default MenuPage;
