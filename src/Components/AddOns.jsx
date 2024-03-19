import React from "react";
import styles from "../styles/AddOns.module.scss";

const AddOns = () => {
  return (
    <div className={styles.addOnsContainer}>
      <label>
        <span className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span>
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </span>
        </span>
        <p className={styles.priceAddOn}> +$1/mo</p>
      </label>
      <label>
        <span className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span>
            <p> Larger storage</p>
            <p> Extra 1TB of cloud save</p>
          </span>
        </span>

        <p className={styles.priceAddOn}> +$2/mo</p>
      </label>
      <label>
        <span className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span>
            <p> Customizable Profile</p>
            <p> Custom theme on your profile</p>
          </span>
        </span>
        <p className={styles.priceAddOn}> +$2/mo</p>
      </label>
    </div>
  );
};

export default AddOns;
