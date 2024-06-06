import Searchbar from "../components/Searchbar";
import FoodSelection from "../components/FoodSelection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="bg-midnightblack px-[227px] pt-96 pb-80 bg-[url(../src/assets/images/backgrounds/shadows_blobs_2.svg)] bg-no-repeat bg-cover bg-center">
        {/* search component */}
        <Searchbar />

        <FoodSelection />
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
