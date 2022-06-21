import { useRef, useState } from "react";
import "../../sass/style.scss";
import React, { Component } from "react";

import generalStyles from "/sass/modules/_General.module.scss";
import billing from "/sass/modules/_Billing.module.scss";
import form2Styles from "/sass/modules/_Form2.module.scss";
import step3 from "/img/step3.svg";
import CountrySelector from "./form_components/CountrySelector";

import Summary from "./form_components/Summary";

export default function CheckOutForm(props) {
  const formEl = useRef(null);
  const [country, setCountry] = useState("");
  const [fullname, setFullname] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [streetaddress, setStreetaddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");

  const ticketHolderObject = {
    name: fullname,
    street_address: streetaddress,
    apartment: apartment,
    city: city,
    postalcode: zipcode,
    country: country,
    ticketholders: props.ticketHolders,
  };
  function backButton() {
    props.setStep((old) => old - 1);
  }
  function exportInfo(e) {
    props.setTicketholderdata(ticketHolderObject);
    props.setShowContent(1);
    props.setStep((old) => old + 1);
  }
  function createObject(e) {
    e.preventDefault();
    setFullname(formEl.current.elements.name.value);
    setStreetaddress(formEl.current.elements.street_address.value);
    setApartment(formEl.current.elements.apartment.value);
    setCity(formEl.current.elements.city.value);
    setZipcode(formEl.current.elements.postalcode.value);
    setCountry(formEl.current.elements.country.value);
  }
  const ticketholderdata = props.ticketholderdata;

  return (
    <>
      <img src="/img/step4.svg" alt="step4 breadcrumbs" className={form2Styles.breadcrumbs} />

      <div className={form2Styles.checkout_grid}>
        <section className={form2Styles.checkout_options}>
          <h2>Checkout</h2>
          <a
            onClick={() => {
              props.setStep((old) => old - 1);
            }}
          >
            ← Back
          </a>
          <h4>Billing Information</h4>
          <form ref={formEl} onChange={createObject} className={billing.billing_form} onSubmit={exportInfo}>
            <fieldset>
              <div className={billing.labelInputPair}>
                <label htmlFor="name">Name as on card</label>
                <input placeholder=" " type="text" id="name" pattern="^[a-zA-ZÆØÅæøå'- ]*$" required />
                <span className={billing.requirements}> Must only contain letters</span>
              </div>
              <div className={billing.splitRow}>
                <div className={billing.labelInputPair}>
                  <label htmlFor="street_address">Street address</label>
                  <span> Guldbergsgade 420</span>
                  <input placeholder=" " type="text" id="street_address" required />
                </div>
                <div className={billing.labelInputPair}>
                  <label htmlFor="apartment">Apartment</label>
                  <span>69 TV</span>
                  <input placeholder=" " type="text" id="apartment" required />
                </div>
              </div>
              <div className={billing.splitRow}>
                <div className={billing.labelInputPair}>
                  <label htmlFor="city">City</label>
                  {<span>Haderslev</span>}
                  <input placeholder=" " type="text" id="city" pattern="^[a-zA-ZÆØÅæøå'- ]*$" required />
                  <span className={billing.requirements}> Must only contain letters</span>
                </div>
                <div className={billing.labelInputPair}>
                  <label htmlFor="postalcode">Postal Code</label>
                  {<span>6100</span>}
                  <input placeholder=" " type="number" id="postalcode" required />
                  <span className={billing.requirements}> Must only contain numbers</span>
                </div>
              </div>
              <div className={billing.LabelInputPair}>
                <label htmlFor="country">Country</label>
                <CountrySelector id="country" required />
              </div>
              <div className={generalStyles.buttonWrapper}>
                <button className={generalStyles.secondaryButton} onClick={backButton}>
                  Back
                </button>
                <button className={generalStyles.primaryButton} onClick={exportInfo}>
                  Next
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
