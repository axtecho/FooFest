import { useState } from "react";
import { useWizard } from "use-wizard";

import generalStyles from "/sass/modules/_General.module.scss";
import form1Styles from "/sass/modules/_Form1.module.scss";

import FormStep1 from "../components/booking/form1/FormStep1";
import CCvalidation from "../components/CCvalidation";
import BillingInfo from "../components/BillingInfo";
import Menu from "../components/general/Menu";
import Footer from "../components/general/Footer";
import HeroBanner from "../components/general/HeroBanner";
import MyLoader from "../components/general/MyLoader";
import TicketHolderForm from "../components/booking/TicketHolderForm";
import FormStep2 from "../components/booking/form2/FormStep2";
import Timer from "../components/booking/Timer";
import TimeUp from "../components/booking/TimeUp";
import Summary from "../components/form_components/Summary";
import Thankyou from "../components/booking/Thankyou";

export default function Booking(props) {
  const [isSearching, setIsSearching] = useState(false);
  const [ticketholderdata, setTicketholderdata] = useState({});
  const [ticketHolders, setTicketHolders] = useState([]);

  const [showcontent, setShowContent] = useState(0);
  const [reservationId, setReservationId] = useState("");
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(0);
  const [ticket, setTicket] = useState("General");
  const [area, setArea] = useState("Svartheim");
  const [amount, setAmount] = useState(1);
  const [reservation, setReservation] = useState([]);
  const [showAlert, setAlert] = useState(false);
  const [basket, setBasket] = useState([{ product: "Booking Fee", price: 99, id: 1, amount: 1 }]);

  const values = {
    isSearching,
    setIsSearching,
    ticketholderdata,
    setTicketholderdata,
    setTicketHolders,
    ticketHolders,
    showcontent,
    setShowContent,
    reservationId,
    setReservationId,
    setStep,
    step,
    timer,
    setTimer,
    ticket,
    setTicket,
    area,
    setArea,
    amount,
    setAmount,
    reservation,
    setReservation,
    showAlert,
    setAlert,
    setBasket,
    basket,
  };

  const prevStep = () => {
    setStep((old) => old - 1);
  };
  const nextStep = () => {
    setStep((old) => old + 1);
  };

  return (
    <>
      {isSearching && <MyLoader message="Searching tickets..." />}
      <div className={form1Styles.Booking}>
        <Menu user={props.user} />
        <HeroBanner img="/img/bands_background.png" title="Tickets" />
        {step === 1 && <FormStep1 {...values} />}
        {step === 2 && <FormStep2 {...values} />}
        {step === 3 && <TicketHolderForm {...values} />}
        {step === 4 && <BillingInfo {...values} />}
        {step === 5 && <CCvalidation {...values} />}
        {step === 6 && <Thankyou {...values} />}

        {timer === 1 && <Timer setStep={setStep} setTimer={setTimer} />}
        {step === -1 && <TimeUp setStep={setStep} />}

        {/* {showcontent === 0 ? (
          <section className={generalStyles.sections_forms}>
            <BillingInfo setShowContent={setShowContent} setTicketholderdata={setTicketholderdata} ticketholderdata={ticketholderdata} />
          </section>
        ) : (
          <section className={generalStyles.sections_forms}>
            <CCvalidation reservationId={reservationId} setShowContent={setShowContent} ticketholderdata={ticketholderdata} />
          </section>
        )} */}
        <Footer />
      </div>
    </>
  );
}
