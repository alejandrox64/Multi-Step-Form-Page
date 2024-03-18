import FormInfo from "./Components/FormInfo";
import Steps from "./Components/Steps";
import styles from "./styles/MainCardForm.module.scss";

function MainCardForm() {
  return (
    <main className={styles.mainCardForm}>
      <Steps />
      <div className={styles.mainContent}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <FormInfo />
        <button className={styles.nextStepButton}>Next Step</button>
      </div>
    </main>
  );
}

export default MainCardForm;
