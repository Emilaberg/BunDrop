import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderConfirmedPage() {
  const { orderId } = useParams();

  return (
    <>
      <Navbar />
      <div className="h-screen ">
        <h1>Din beställning är mottagen</h1>
        <h1>
          Ditt Ordernummer är: <span>{orderId}</span>
        </h1>
        <h3>OBS. Spara ditt ordernummer, detta är ditt användarnamn</h3>
        <h3>
          Om du har valt att skapa konto, kan du nu logga in för att kolla
          status på din order
        </h3>
        <h5>Användarnamn kan du ändra under inställningar</h5>
      </div>
      <Footer />
    </>
  );
}

export default OrderConfirmedPage;
