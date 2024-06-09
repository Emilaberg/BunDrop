import { useEffect, useState } from "react";

function Localstorage() {
  //jag hämtar ny version från localstorage
  //setLocalstorage
  const [cart, setCart] = useState([]);

  let item_is_added = false;
  useEffect(() => {
    console.log("useeffect laddats");
    updateCartState();
  }, []);
  //create
  function add(item) {
    // getCart();
    updateCartState();
    //kollar om den finns,
    if (!is_already_added(item)) {
      //finns inte objektet, lägg till det i carten, och pusha den nya carten till localstorage
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // uppdatera sedan vår cart med den nya carten från localstorage.
    updateCartState();
  }

  function is_already_added(item) {
    cart.map((i) => {
      parseInt(i.item_id) == parseInt(item.item_id)
        ? increaseItemCount(i, true)
        : i;
    });

    if (item_is_added == true) {
      return true;
    } else {
      return false;
    }
  }

  function increaseItemCount(item, type) {
    console.log("öka med 1");
    type ? item.count++ : item.count--;
    item_is_added = true;
  }

  //read
  function getAll() {}

  function get(id) {}

  //Update

  function update() {}

  function updateCartState(type) {
    if (localStorage.getItem("cart")) {
      let res = localStorage.getItem("cart");
      setCart(JSON.parse(res));
    } else {
      localStorage.setItem("cart", []);
    }
  }
  //Delete

  function remove() {}

  return {
    cart,
    add,
    getAll,
    update,
    remove,
    updateCartState,
  };
}

export default Localstorage;
