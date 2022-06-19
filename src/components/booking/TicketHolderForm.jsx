import { useState, useRef } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import Summary from "../form_components/Summary";

export default function TicketHolderForm(props) {
  const formEl = useRef(null);
  const [holderName, setHolderName] = useState("");
  const [holderEmail, setHolderEmail] = useState("");
  const [ticketHolders, setTicketHolders] = useState([]);
  const [personName, setPersonName] = useState("");

  const formik = useFormik({
    initialValues: {},
    // onSubmit: (values) => {
    //   // console.log(values);
    //   setTicketHolders(values);
    //   console.log(ticketHolders);
    // },
  });

  const holderForm = [...Array(props.amount)].map((e, i) => {
    if (i < props.amount) {
      return (
        <fieldset className={billing.ticketholderCard}>
          <legend>Ticketholder {i + 1}</legend>
          <label htmlFor="name">Full name</label>
          <input type="text" id={"name" + i} name={"name" + i} placeholder=" " pattern="^[a-zA-ZÆØÅæøå'- ]*$" required onChange={formik.handleChange} value={formik.values.name} />
          <label htmlFor="email">Email</label>
          <input type="email" name={"email" + i} id={"email" + i} placeholder=" " required onChange={formik.handleChange} />
          {/* {console.log(formik.values.name0)}
          {console.log(formik.values)} */}

          {/* <input
            type="radio"
            name="user"
            id="user"
            onClick={() => {
              console.log(formEl.current.elements);
              setHolderName(formEl.current.elements[i * 4 + 1].value);
              setHolderEmail(formEl.current.elements[i * 4 + 2].value);
            }}
          /> */}
          {/* <label htmlFor="user">Use this data for credit card</label> */}
        </fieldset>
      );
    }
  });
  return (
    <>
      <img src="/img/step3.svg" alt="step3 breadcrumbs" className={form2Styles.breadcrumbs} />
      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Ticket holder information</h2>
          <a href="#/">← Back</a>

          <Formik
            initialValues={{
              picked: "",
            }}
          >
            <form className={billing.billing_form} ref={formEl} onSubmit={formik.handleSubmit}>
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
                    type="submit"
                    className={generalStyles.primaryButton}
                    onClick={() => {
                      props.setStep((old) => old + 1);
                      setTicketHolders(formik.values);
                      console.log(ticketHolders);
                    }}
                  >
                    Continue to payment
                  </button>
                </div>
              </fieldset>
            </form>
          </Formik>
        </section>
        <Summary {...props} />
      </div>
    </>
  );
}
