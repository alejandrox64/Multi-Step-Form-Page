import React from "react";
import styles from "../styles/FormInfo.module.scss";

const FormInfo = () => {
  return (
    <form className={styles.formInfo}>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Email Adress
        <input type="email" />
      </label>
      <label>
        Phone Number
        <input type="number" />
      </label>
      <input type="submit">Enviar</input>
    </form>
  );
};

export default FormInfo;
