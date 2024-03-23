import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBillingType } from "../redux/reducers/plansSlice";
import styles from "../styles/Plan.module.scss";

const Plan = () => {
  const pricesPerMonth = useSelector((state) => state.plans.monthly);
  const pricesPerYear = useSelector((state) => state.plans.year);
  const isMonthly = useSelector((state) => state.plans.planIsMonthly);
  const dispatch = useDispatch();

  const handleChangeBillingType = () => {
    dispatch(changeBillingType());
    console.log(isMonthly);
  };

  return (
    <div className={styles.plansContainer}>
      <div className={styles.plans}>
        <button className={!isMonthly ? styles.plansOfYear : undefined}>
          <img src="../../public/icon-arcade.svg" />
          <span className={styles.descriptionOfPlan}>
            <p className={styles.nameOfPlan}>Arcade</p>
            <p className={styles.price}>
              {isMonthly ? pricesPerMonth.arcade : pricesPerYear.arcade}
            </p>
            {!isMonthly && <p className={styles.freeMessage}>2 months free</p>}
          </span>
        </button>
        <button className={!isMonthly ? styles.plansOfYear : undefined}>
          <img src="../../public/icon-advanced.svg" />
          <span className={styles.descriptionOfPlan}>
            <p className={styles.nameOfPlan}>Advanced</p>
            <p className={styles.price}>
              {isMonthly ? pricesPerMonth.advanced : pricesPerYear.advanced}
            </p>
            {!isMonthly && <p className={styles.freeMessage}>2 months free</p>}
          </span>
        </button>
        <button className={!isMonthly ? styles.plansOfYear : undefined}>
          <img src="../../public/icon-pro.svg" />
          <span className={styles.descriptionOfPlan}>
            <p className={styles.nameOfPlan}>Pro</p>
            <p className={styles.price}>
              {isMonthly ? pricesPerMonth.pro : pricesPerYear.pro}
            </p>
            {!isMonthly && <p className={styles.freeMessage}>2 months free</p>}
          </span>
        </button>
      </div>

      <div className={styles.typeOfPlan}>
        <span>Monthly</span>
        <button
          onClick={handleChangeBillingType}
          className={!isMonthly ? styles.year : undefined}
        >
          <span></span>
        </button>
        <span>Year</span>
      </div>
    </div>
  );
};

export default Plan;
