import React from "react";
import styles from "../styles/Plan.module.scss";

const Plan = () => {
  return (
    <div className={styles.plansContainer}>
      <div className={styles.plans}>
        <button>
          <img src="../../public/icon-arcade.svg" />
          <span className={styles.descriptionOfPlan}>
            <p className={styles.nameOfPlan}>Arcade</p>
            <p className={styles.price}>$9/mo</p>
          </span>
        </button>
        <button>
          <img src="../../public/icon-advanced.svg" />
          <span className={styles.descriptionOfPlan}>
            <p className={styles.nameOfPlan}>Advanced</p>
            <p className={styles.price}>$12/mo</p>
          </span>
        </button>
        <button>
          <img src="../../public/icon-pro.svg" />
          <span className={styles.descriptionOfPlan}>
            <p className={styles.nameOfPlan}>Pro</p>
            <p className={styles.price}>$15/mo</p>
          </span>
        </button>
      </div>

      <div className={styles.typeOfPlan}>
        <span>Monthly</span>
        <button>
          <span></span>
        </button>
        <span>Year</span>
      </div>
    </div>
  );
};

export default Plan;
