import ConfirmationStep from "./Components/ConfirmationStep";
import Steps from "./Components/Steps";
import styles from "./styles/MainCardForm.module.scss";

function MainCardForm() {
  return (
    <main className={styles.mainCardForm}>
      <Steps />
      <div className={styles.mainContent}>
        <h1>Personal info</h1>
        <p className={styles.descriptionMainCard}>
          Please provide your name, email address, and phone number.
        </p>
        <ConfirmationStep />
        <div className={styles.buttons}>
          <button className={styles.backButton}>Go Back</button>
          <button className={styles.nextButton}>Next Step</button>
        </div>
      </div>
    </main>
  );
}

export default MainCardForm;
