import { useEffect, useState } from "react";

function Localstorage() {
  //jag hämtar ny version från localstorage
  //setLocalstorage
  // const [cart, setCart] = useState([]);

  let item_is_added = false;
  useEffect(() => {
    console.log("useeffect laddats");
    updateCartState();
  }, []);
  //create
  function add(item) {
    // getCart();
    // updateCartState();
    item_is_added = false;
    let res = localStorage.getItem("cart");
    if (res) {
      let cart = JSON.parse(res);
      if (!is_already_added(cart, item)) {
        //finns inte objektet, lägg till det i carten, och pusha den nya carten till localstorage
        cart.push(item);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([item]));
    }
    //kollar om den finns,

    // uppdatera sedan vår cart med den nya carten från localstorage.
    // updateCartState();
  }

  function is_already_added(cart, item) {
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
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", []);
    } else {
      // localStorage.setItem("cart", []);
    }
  }
  //Delete

  function remove(item) {
    if (localStorage.getItem("cart")) {
      let res = localStorage.getItem("cart");
      let cart = JSON.parse(res);

      //filtrerar carten
      cart.map((i) => {
        i.item_id == item.item_id ? i.count-- : i;
      });

      let filteredCart = cart.filter((i) => {
        if (parseInt(i.count) == 0) {
          console.log("count is zero");
          return false;
        }
        return true;
      });

      localStorage.setItem("cart", JSON.stringify(filteredCart));
    }
  }

  return {
    add,
    getAll,
    update,
    remove,
    updateCartState,
  };
}

export default Localstorage;
