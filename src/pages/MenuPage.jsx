import Searchbar from "../components/Searchbar";
import FoodSelection from "../components/FoodSelection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function MenuPage() {
  const [menu, setMenu] = useState();
  const [filteredMenu, setFilteredMenu] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  function onSearch(value) {
    // console.log(value);
    let s = menu.filter((m) => m.category.includes(value));
    console.log(s);
    setFilteredMenu(s);
  }
  return (
    <>
      <Navbar />
      <div className="bg-midnightblack px-[227px] pt-96 pb-80 bg-[url(../src/assets/images/backgrounds/shadows_blobs_2.svg)] bg-no-repeat bg-cover bg-center">
        {/* search component */}
        <Searchbar onSearch={onSearch} />

        <FoodSelection
          menu={menu}
          filteredMenu={filteredMenu}
        />
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
