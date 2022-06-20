import FixedFee from "./FixedFee";
import GreenCamping from "./GreenCamping";
import CrewSetup from "./CrewSetup";
import form2Styles from "/sass/modules/_Form2.module.scss";
import generalSyles from "/sass/modules/_General.module.scss";

export default function CampingOptions(props) {
  return (
    <section className={form2Styles.checkout_options}>
      <h2>Select Camping Options</h2>
      <a
        onClick={() => {
          props.setStep((old) => old - 1);
        }}
      >
        ← Back
      </a>
      <form>
        <FixedFee />
        <GreenCamping {...props} />
        <CrewSetup {...props} />
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
      </form>
    </section>
  );
}
