import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Steps.module.scss";

const Steps = () => {
  const step = useSelector((state) => state.steps.step);

  return (
    <div className={styles.steps}>
      <span className={styles.step}>
        <span
          className={`${styles.numberOfStep} ${
            step === 1 ? styles.currentStep : undefined
          }`}
        >
          <p className={styles.number}>1</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}>STEP 1</p>
          <p className={styles.nameOfStep}>YOUR INFO</p>
        </span>
      </span>
      <span className={styles.step}>
        <span
          className={`${styles.numberOfStep} ${
            step === 2 ? styles.currentStep : undefined
          }`}
        >
          <p className={styles.number}>2</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}>STEP 2</p>
          <p className={styles.nameOfStep}>SELECT PLAN</p>
        </span>
      </span>
      <span className={styles.step}>
        <span
          className={`${styles.numberOfStep} ${
            step === 3 ? styles.currentStep : undefined
          }`}
        >
          <p className={styles.number}>3</p>
        </span>
        <span className={styles.descriptionStep}>
          <p className={styles.titleStep}>STEP 3</p>
          <p className={styles.nameOfStep}>ADD-ONS</p>
        </span>
      </span>
      <span className={styles.step}>
        <span
          className={`${styles.numberOfStep} ${
            step === 4 ? styles.currentStep : undefined
          }`}
        >
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
