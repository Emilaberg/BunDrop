import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderConfirmedPage() {
  const { orderId } = useParams();

  return (
    <>
      <Navbar />
      <div className="h-screen pt-20 bg-midnightblack text-center text-white">
        <h1 className="text-5xl">Din beställning är mottagen</h1>
        <h1 className="text-2xl">
          Ditt Ordernummer är: <span>{orderId}</span>
        </h1>
        <h3 className="mt-5">
          OBS. Spara ditt ordernummer, detta är ditt användarnamn
        </h3>
        <h3 className="mt-2">
          Om du har valt att skapa konto, kan du nu logga in för att kolla
          status på din order
        </h3>
        <h5>Användarnamn kan du ändra under inställningar</h5>
        <h1>
          Estimated time {Math.floor(Math.random() * (50 - 10) + 10)} minutes
        </h1>
      </div>
      <Footer />
    </>
  );
}

export default OrderConfirmedPage;
