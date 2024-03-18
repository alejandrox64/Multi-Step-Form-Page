import React from "react";
import styles from "../styles/Steps.module.scss";

const Steps = () => {
  return (
    <div className={styles.steps}>
      <span className={styles.oneStep}>
        <span className={styles.numberOfStep}>
          <p>1</p>
        </span>
        <p className={styles.titleStep}></p>
        <p className={styles.nameOfStep}></p>
      </span>
      <span className={styles.secondStep}>
        <span className={styles.numberOfStep}>
          <p>2</p>
        </span>
        <p className={styles.titleStep}></p>
        <p className={styles.nameOfStep}></p>
      </span>
      <span className={styles.thirdStep}>
        <span className={styles.numberOfStep}>
          <p>3</p>
        </span>
        <p className={styles.titleStep}></p>
        <p className={styles.nameOfStep}></p>
      </span>
      <span className={styles.fourthStep}>
        <span className={styles.numberOfStep}>
          <p>4</p>
        </span>
        <p className={styles.titleStep}></p>
        <p className={styles.nameOfStep}></p>
      </span>
    </div>
  );
};

export default Steps;
