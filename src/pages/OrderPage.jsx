import { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Payslip from "../components/Payslip";
import { Link, useNavigate } from "react-router-dom";
import Localstorage from "../hooks/Localstorage";
import CTA_button from "../components/CTA_button";
function OrderPage({ setOngoingOrder }) {
  const [reviewOrderDetails, setReviewOrderDetails] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  const Navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dbHook = Localstorage();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function reviewOrder() {
    setReviewOrderDetails(!reviewOrderDetails);
  }

  function handleSelectPaymentMethod(e) {
    setSelectedPaymentMethod(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    setOngoingOrder(true);

    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let order = {
      id: n,
      name: name,
      number: number,
      email: email,
      password: password,
      items: cart,
    };
    // dbHook.createOrder(order);
    localStorage.setItem(`${n}`, JSON.stringify(order));
    Navigate(`/betalning/nets_paymentMethod_${selectedPaymentMethod}/${n}`);
  }

  useEffect(() => {
    let res = localStorage.getItem("cart");
    res ? setCart(JSON.parse(res)) : res;
  }, []);

  function handleAdd(item) {
    dbHook.add(item);

    let res = localStorage.getItem("cart");
    res ? setCart(JSON.parse(res)) : res;
  }

  function handleRemove(item) {
    dbHook.remove(item);

    let res = localStorage.getItem("cart");
    res ? setCart(JSON.parse(res)) : res;
  }

  return (
    <>
      <Navbar />
      <div className="bg-midnightblack px-72 py-60 text-white">
        <h1 className="text-2xl font-bold">
          {reviewOrderDetails ? "Min Order" : "Betalning"}
        </h1>
        <div className="flex justify-between">
          {reviewOrderDetails ? (
            <div className="flex-grow mr-20">
              {cart.length > 0 ? (
                cart.map((i) => (
                  <OrderItem
                    key={i.item_id}
                    item={i}
                  />
                ))
              ) : (
                <CTA_button
                  text={"hungry?"}
                  borderColor={"orange"}
                  w={150}
                  h={42}
                  link="/meny"
                />
              )}
            </div>
          ) : (
            <div className="flex flex-col flex-grow">
              <h1 className="text-4xl">Bun drop</h1>
              <p>
                Vi arbetar så fort vi kan med din order och drönare kommer vara
                redo så fort ordern är klar.
              </p>
              <form
                className="flex flex-col flex-grow self-stretch"
                action=""
              >
                <div className="">
                  <div>
                    <input
                      className="text-midnightblack bg-paleGray w-1/2 py-3 px-2"
                      type="firstname"
                      placeholder="namn"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div>
                      Obligatorisk <span className=" text-orange">*</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <input
                      className="text-midnightblack bg-paleGray w-1/2 py-3 px-2"
                      type="phone"
                      placeholder="telefonnummer"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <div>
                      Obligatorisk <span className=" text-darkblue">*</span>
                    </div>
                  </div>
                  <div>
                    <input
                      className="text-midnightblack bg-paleGray w-1/2 py-3 px-2"
                      type="email"
                      placeholder="email"
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <div>
                      Obligatorisk <span className=" text-darkblue">*</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        className="text-midnightblack scale-125"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <span>jag godkänner användarvillkoren</span>
                    </div>
                    <div>
                      <input
                        className="text-midnightblack scale-125"
                        type="checkbox"
                        name=""
                        id=""
                        onClick={() => setRememberMe(!rememberMe)}
                      />
                      <span>
                        kom ihåg mina uppgifter (Om den är ifylld så visas
                        lösenords inputsen)
                      </span>
                    </div>
                    {rememberMe ? (
                      <div className="flex flex-col gap-2">
                        <input
                          className="text-midnightblack bg-paleGray w-1/2 py-3 px-2"
                          type="password"
                          placeholder="lösenord"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                          className="text-midnightblack bg-paleGray w-1/2 py-3 px-2"
                          type="password"
                          placeholder="Upprepa lösenord"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="mt-auto ml-auto mb-5 mr-5">
                  <select
                    className="bg-midnightblack border-2 border-solid border-orange rounded-2xl px-5 mr-3"
                    onChange={handleSelectPaymentMethod}
                  >
                    <option value="card">kort</option>
                    <option value="swish">swish</option>
                  </select>
                  <button
                    className="bg-orange rounded-2xl w-full px-5 py-2"
                    onClick={onFormSubmit}
                  >
                    Gå till betalning
                  </button>
                </div>
              </form>
            </div>
          )}

          <Payslip
            setReviewOrderDetails={reviewOrder}
            orderState={reviewOrderDetails}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            cart={cart}
            totalPrice={totalPrice}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderPage;
