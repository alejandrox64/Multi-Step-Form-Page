import React from "react";
import styles from "../styles/FormInfo.module.scss";

const FormInfo = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formInfo}>
        <label>
          <span>Name</span>
          <input type="text" required />
        </label>
        <label>
          <span>Email Adress</span>
          <input type="email" required />
        </label>
        <label>
          <span>Phone Number</span>
          <input type="number" required />
        </label>
      </form>
    </div>
  );
};

export default FormInfo;
