import { useState, useRef } from "react";
import { Formik, Form, Field, useFormik } from "formik";

import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalStyles from "/sass/modules/_General.module.scss";

import Summary from "../form_components/Summary";
import HolderInfo from "./HolderInfo";

export default function TicketHolderForm(props) {
  const formEl = useRef(null);

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
      return <HolderInfo i={i} formik={formik} />;
    }
  });

  return (
    <>
      <img src="/img/step3.svg" alt="step3 breadcrumbs" className={form2Styles.breadcrumbs} />
      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Ticket holder information</h2>
          <a
            onClick={() => {
              props.setStep((old) => old - 1);
            }}
          >
            ← Back
          </a>

          <Formik>
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
                    type="submit"
                    className={generalStyles.primaryButton}
                    onClick={() => {
                      props.setStep((old) => old + 1);
                      props.setTicketHolders(formik.values);
                      console.log(formik.values);
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
