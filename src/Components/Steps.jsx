import React from "react";
import styles from "../styles/Steps.module.scss";

const Steps = () => {
  return (
    <div className={styles.steps}>
      <span className={styles.step}>
        <span className={styles.numberOfStep}>
          <p className={styles.number}>1</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}>STEP 1</p>
          <p className={styles.nameOfStep}>YOUR INFO</p>
        </span>
      </span>
      <span className={styles.step}>
        <span className={styles.numberOfStep}>
          <p className={styles.number}>2</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}>STEP 2</p>
          <p className={styles.nameOfStep}>SELECT PLAN</p>
        </span>
      </span>
      <span className={styles.step}>
        <span className={styles.numberOfStep}>
          <p className={styles.number}>3</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}>STEP 3</p>
          <p className={styles.nameOfStep}>ADD-ONS</p>
        </span>
      </span>
      <span className={styles.step}>
        <span className={styles.numberOfStep}>
          <p className={styles.number}>4</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}> STEP 4</p>
          <p className={styles.nameOfStep}> SUMMARY</p>
        </span>
      </span>
    </div>
  );
};

export default Steps;
