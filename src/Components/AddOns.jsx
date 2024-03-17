import React from "react";
import styles from "../styles/AddOns.module.scss";

const AddOns = () => {
  return (
    <div className={styles.addOns}>
      <label>
        <input type="checkbox" />
        <span>
          <p></p>
          <p></p>
        </span>
        <p></p>
      </label>
      <label>
        <input type="checkbox" />
        <span>
          <p></p>
          <p></p>
        </span>
        <p></p>
      </label>
      <label>
        <input type="checkbox" />
        <span>
          <p></p>
          <p></p>
        </span>
        <p></p>
      </label>
      <button>Go Back</button>
      <button>Next Step</button>
    </div>
  );
};

export default AddOns;
