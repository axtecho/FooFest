import billing from "/sass/modules/_Billing.module.scss";

export default function holderForm(props) {
  return (
    <fieldset className={billing.ticketholderCard}>
      <legend>Ticketholder {props.i + 1}</legend>
      <label htmlFor="name">Full name</label>
      <input type="text" id={"name" + props.i} name={"name" + props.i} placeholder=" " pattern="^[a-zA-ZÆØÅæøå'- ]*$" required onChange={props.formik.handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name={"email" + props.i} id={"email" + props.i} placeholder=" " required onChange={props.formik.handleChange} />
    </fieldset>
  );
}
