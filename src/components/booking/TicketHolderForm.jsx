import { useState, useRef } from "react";
import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import Summary from "../form_components/Summary";

export default function TicketHolderForm(props) {
  const formEl = useRef(null);
  const [holderName, setHolderName] = useState("");
  const [holderEmail, setHolderEmail] = useState("");
  const [ticketHolders, setTicketHolders] = useState([]);

  function createHolder(hName, hEmail) {
    console.log(`name: ${hName}`);
    console.log(`email: ${hEmail}`);
    const holder = { hName, hEmail };
    console.log(holder);
    setTicketHolders((old) => old.concat(holder));
    console.log(ticketHolders);
  }

  const holderForm = [...Array(props.amount)].map((e, i) => {
    if (i < props.amount) {
      return (
        <fieldset className={billing.ticketholderCard}>
          <legend>Ticketholder {i + 1}</legend>
          <label htmlFor="name">Name</label>
          <input type="text" id={"name" + i} name={"name" + i} placeholder=" " pattern="^[a-zA-ZÆØÅæøå'- ]*$" required />
          <label htmlFor="email">Email</label>
          <input type="email" name={"email" + i} id={"email" + i} placeholder=" " required />
          <button
            className={generalStyles.primaryButton}
            onClick={() => {
              // console.log(formEl.current.elements[i * 4 + 4].value);
              const hName = formEl.current.elements[i * 4 + 1].value;
              const hEmail = formEl.current.elements[i * 4 + 2].value;
              setHolderName(formEl.current.elements[i * 4 + 1].value);
              setHolderEmail(formEl.current.elements[i * 4 + 2].value);
              createHolder(hName, hEmail);
            }}
          >
            Use info
          </button>
        </fieldset>
      );
    }
  });
  return (
    <>
      {/* <h2>TICKET HOLDERS INFORMATION</h2>

      <a href="#/">← Back</a>
      <form ref={formEl}>
        <fieldset>{holderForm}</fieldset>
        <div className={generalSyles.buttonWrapper}>
          <button
            className={generalSyles.secondaryButton}
            onClick={() => {
              props.setStep((old) => old - 1);
            }}
          >
            Back
          </button>
          <button
            className={generalSyles.primaryButton}
            onClick={() => {
              props.setStep((old) => old + 1);
            }}
          >
            Continue to payment
          </button>
        </div>
      </form> */}

      {/* -------------------------------------------------- */}
      <img src="/img/step3.svg" alt="step3 breadcrumbs" className={form2Styles.breadcrumbs} />
      {console.log(holderName, holderEmail)}

      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Ticket holder information</h2>
          <a href="#/">← Back</a>
          <form className={billing.billing_form} ref={formEl}>
            {holderForm}
            <fieldset>
              <div className={generalStyles.buttonWrapper}>
                <button
                  className={generalStyles.secondaryButton}
                  onClick={() => {
                    props.setStep((old) => old - 1);
                  }}
                >
                  Back
                </button>
                <button
                  className={generalStyles.primaryButton}
                  onClick={() => {
                    props.setStep((old) => old + 1);
                  }}
                >
                  Continue to payment
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <Summary {...props} />
      </div>
    </>
  );
}
