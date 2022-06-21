import { useRef, useState } from "react";

import form1Styles from "/sass/modules/_Form1.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import AreaButton from "./AreaButton";
import TicketButton from "./TicketButton";
import AmountButton from "./AmountButton";
import Alert from "./Alert";
import Timer from "../Timer";
import TimeUp from "../TimeUp";
import FormStep2 from "../form2/FormStep2";

export default function FormStep1({ ...props }) {
  const formEl = useRef(null);
  const area = props.area;
  const amount = props.amount;

  function searchTickets(e) {
    e.preventDefault();
    props.setIsSearching(true);

    const ticketRequest = { area, amount };
    const putData = JSON.stringify(ticketRequest);

    fetch("https://foofestival.herokuapp.com/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: putData,
    })
      .then((response) => {
        response.json().then((data) => {
          props.setReservation(data);
          props.setReservationId(data.id);

          data.error ? showAlert() : applyReservationId();
        });

        const timing = setTimeout(() => {
          props.setIsSearching(false);
          props.showAlert ? props.setTimer(0) : props.setTimer(1);
        }, 2000);
        return () => {
          clearTimeout(timing);
        };
      })
      .catch((err) => console.error(err));
  }

  function showAlert() {
    props.setAlert(true);
  }
  function applyReservationId() {
    props.setReservationId(props.reservation.id);
    props.setStep((old) => old + 1);
  }
  {
  }
  return (
    <>
      {!props.showAlert && (
        <div className={form2Styles.checkout_grid}>
          <section className={form2Styles.checkout_optionsFullWidth}>
            <h2>Select ticket</h2>
            <form className={form1Styles.step1Form} ref={formEl} onSubmit={searchTickets}>
              <fieldset>
                <label>Ticket Type:</label>
                <div className={form1Styles.form__type}>
                  <TicketButton name="General" price="799kr" ticket={props.ticket} setTicket={props.setTicket} />
                  <TicketButton name="VIP" price="1299kr" ticket={props.ticket} setTicket={props.setTicket} />
                </div>
              </fieldset>

              <fieldset className={form1Styles.form__amount}>
                <label>Choose amount:</label>
                <AmountButton id="amount" name="amount" amount={props.amount} setAmount={props.setAmount} />
              </fieldset>

              <fieldset>
                {/* <legend>Choose area</legend> */}
                <label>Choose area:</label>
                <div className={form1Styles.form__area}>
                  <div className={form1Styles.form__area__row}>
                    <AreaButton name="Svartheim" area={props.area} setArea={props.setArea} />
                    <AreaButton name="Nilfheim" area={props.area} setArea={props.setArea} />
                    <AreaButton name="Helheim" area={props.area} setArea={props.setArea} />
                  </div>
                  <div className={form1Styles.form__area__row}>
                    <AreaButton name="Muspeleheim" area={props.area} setArea={props.setArea} />
                    <AreaButton name="Alfheim" area={props.area} setArea={props.setArea} />
                  </div>
                </div>
              </fieldset>

              {!props.isSearching && <button className={generalStyles.primaryButton}>Find tickets</button>}
              {props.isSearching && <button className={generalStyles.primaryButton}>Searching tickets...</button>}
            </form>
          </section>
        </div>
      )}
      {props.showAlert === true && <Alert message={props.reservation.error} setAlert={props.setAlert} setTimer={props.setTimer} />}
    </>
  );
}
