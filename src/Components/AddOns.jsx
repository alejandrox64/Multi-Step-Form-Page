import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/AddOns.module.scss";

const AddOns = () => {
  const isMonthly = useSelector((state) => state.plans.planIsMonthly);
  const priceAddsForMonth = useSelector((state) => state.plans.monthly);
  const priceAddsForYear = useSelector((state) => state.plans.year);

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
        <p className={styles.priceAddOn}>
          {" "}
          {isMonthly
            ? priceAddsForMonth.onlineService
            : priceAddsForYear.onlineService}
        </p>
      </label>
      <label>
        <span className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span>
            <p> Larger storage</p>
            <p> Extra 1TB of cloud save</p>
          </span>
        </span>

        <p className={styles.priceAddOn}>
          {" "}
          {isMonthly
            ? priceAddsForMonth.largerStorage
            : priceAddsForYear.largerStorage}
        </p>
      </label>
      <label>
        <span className={styles.checkboxContainer}>
          <input type="checkbox" />
          <span>
            <p> Customizable Profile</p>
            <p> Custom theme on your profile</p>
          </span>
        </span>
        <p className={styles.priceAddOn}>
          {" "}
          {isMonthly
            ? priceAddsForMonth.customizableProfile
            : priceAddsForYear.customizableProfile}
        </p>
      </label>
    </div>
  );
};

export default AddOns;
