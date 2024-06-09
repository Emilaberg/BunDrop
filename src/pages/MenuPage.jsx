import Searchbar from "../components/Searchbar";
import FoodSelection from "../components/FoodSelection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [resetSearch, setResetSearch] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
    console.log(menu);
  }, []);

  function onSearch(value) {
    let res = menu.filter((item) => {
      if (item.category.toLowerCase().includes(value.toLowerCase()))
        return true;

      if (item.title.toLowerCase().includes(value.toLowerCase())) return true;
    });
    setFilteredItems(res);
  }

  function sort(prop) {
    let sortedFilteredMenu;
    console.log(typeof filteredItems);
    if (filteredItems.length == 0) {
      sortedFilteredMenu = [...menu];
    } else {
      sortedFilteredMenu = [...filteredItems];
    }

    switch (prop) {
      case "price_asc":
        sortedFilteredMenu.sort((a, b) => b.price - a.price);
        break;
      case "price_desc":
        sortedFilteredMenu.sort((a, b) => a.price - b.price);
        break;
      case "alphabetic":
        sortedFilteredMenu.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortedFilteredMenu);
        break;

      default:
      // sortedFilteredMenu.sort((a, b) => b.price - a.price);
    }
    setFilteredItems(sortedFilteredMenu);
  }

  return (
    <>
      <Navbar />
      <div className="bg-midnightblack px-[227px] pt-96 pb-80 bg-[url(../src/assets/images/backgrounds/shadows_blobs_2.svg)] bg-no-repeat bg-cover bg-center">
        {/* search component */}
        <Searchbar
          onSearch={onSearch}
          onSort={sort}
        />

        <FoodSelection
          menu={menu}
          filteredMenu={filteredItems}
        />
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
