import { useEffect } from "react";
import ms from "../assets/images/icons/mastercard.svg";
import visa from "../assets/images/icons/visa.svg";
import nets from "../assets/images/icons/nets.svg";
import { Link, useNavigate } from "react-router-dom";

function PaymentPage({ ongoingOrder, check, setCheck }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (ongoingOrder == false) {
      navigate("/");
    }
    if (check == false && ongoingOrder == true) {
      setCheck(true);
    }
  }, []);

  function pay(e) {
    e.preventDefault();

    setCheck(false);
    navigate("/");
  }

  return (
    <div className="flex">
      <div className="mx-auto w-1/3">
        <h1 className="font-bold text-xl">Betala Med Kort</h1>
        <div className="flex bg-paleGray px-2 py-1 my-5">
          Beställning Från Bun Drop <span className="ml-auto">494,00</span>
        </div>
        <div className="my-5">
          <h3 className="font-bold text-lg my-1">Fyll i dina kortuppgifter</h3>
          <p className="font-light text-base my-1">
            Fyll i dina kortuppgifter nedan och klicka på "Betala" för att
            slutföra köpet.
          </p>
          <p className="font-light text-base my-1">
            Bun Drop anlitar Nets Technology för säker betalning och skyddar dig
            som kortinnehavare mot <br />
            bedrägerier genom att använda 3D Secure. Detta innebär att du i
            nästa steg kommer att ombedjas att verifiera din identitet hos din
            bank eller kortutgivare.
          </p>
        </div>
        <div className="flex my-5">
          <img
            src={ms}
            alt=""
          />
          <img
            className="ml-2"
            src={visa}
            alt=""
          />
        </div>

        <form action="">
          <div className="flex flex-col">
            <label htmlFor="">Kortnummer</label>
            <input
              className="bg-paleGray px-2 py-1"
              type="text"
              placeholder="**** **** **** ****"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">giltighetstid</label>
            <div className="flex gap-2">
              <select
                className="bg-paleGray px-2 py-1 w-1/2"
                name=""
                id=""
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
              <select
                className="bg-paleGray px-2 py-1 w-1/2"
                name=""
                id=""
              >
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
                <option value="">31</option>
                <option value="">32</option>
                <option value="">33</option>
                <option value="">34</option>
                <option value="">35</option>
                <option value="">36</option>
                <option value="">37</option>
                <option value="">38</option>
                <option value="">39</option>
                <option value="">40</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="">CVV2/CVC2/CID</label>
            <input
              className="bg-paleGray px-2 py-1 w-1/2"
              type="text"
              name=""
              id=""
            />
          </div>
          <img
            className="my-4"
            src={nets}
            alt=""
          />

          <div className="uppercase w-full flex gap-2">
            <Link
              className="bg-paleGray w-1/2 text-center py-3"
              onClick={() => setCheck(false)}
              to={"/min-order"}
            >
              Avbryt
            </Link>
            <button
              onClick={pay}
              className="bg-paleGray w-1/2 text-center py-3"
            >
              Betala
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
