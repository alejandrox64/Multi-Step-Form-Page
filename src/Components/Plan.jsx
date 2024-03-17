import React from "react";
import styles from "../styles/Plan.module.scss";

const Plan = () => {
  return (
    <div className={styles.plansContainer}>
      <button>
        <img></img>
        <p className={styles.nameOfPlan}></p>
        <p className={styles.price}></p>
      </button>
      <button>
        <img></img>
        <p className={styles.nameOfPlan}></p>
        <p className={styles.price}></p>
      </button>
      <button>
        <img></img>
        <p className={styles.nameOfPlan}></p>
        <p className={styles.price}></p>
      </button>
      <div>
        <span>Monthly</span>
        <button></button>
        <span>Year</span>
      </div>
      <button>Go Back</button>
      <button>Next Step</button>
    </div>
  );
};

export default Plan;
