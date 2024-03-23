import React from "react";
import styles from "../styles/ConfirmationStep.module.scss";

const ConfirmationStep = () => {
  return (
    <div className={styles.confirmationStepContainer}>
      <div className={styles.planWithAddOns}>
        <div className={styles.plan}>
          <span>
            <p>Arcade(monthly)</p>
            <a>change</a>
          </span>
          <p>$9/mo</p>
        </div>
        <div className={styles.addOn}>
          <p>Online service</p>
          <p>+$1/mo</p>
        </div>
        <div className={styles.addOn}>
          <p>Larger storage</p>
          <p>+$2/mo</p>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <p>Total (per month)</p>
        <p>+12$/mo</p>
      </div>
    </div>
  );
};

export default ConfirmationStep;
