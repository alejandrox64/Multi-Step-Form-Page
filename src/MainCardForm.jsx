// Components
import FormInfo from "./Components/FormInfo";
import Plan from "./Components/Plan";
import AddOns from "./Components/AddOns";
import ConfirmationStep from "./Components/ConfirmationStep";
import FinishCard from "./Components/FinishCard";

import Steps from "./Components/Steps";
import styles from "./styles/MainCardForm.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep } from "./redux/reducers/stepsSlice";

function MainCardForm() {
  const step = useSelector((state) => state.steps.step);
  const renderedComponent = useSelector(
    (state) => state.steps.renderedCard[step - 1]
  );
  const title = useSelector((state) => state.steps.title[step - 1]);
  const description = useSelector((state) => state.steps.description[step - 1]);
  const dispatch = useDispatch();

  const renderComponent = () => {
    switch (renderedComponent) {
      case "formInfo":
        return <FormInfo />;
      case "plan":
        return <Plan />;
      case "addOns":
        return <AddOns />;
      case "confirmationStep":
        return <ConfirmationStep />;
      case "finishCard":
        return <FinishCard />;
      default:
        return null;
    }
  };
  const handleNextClick = () => {
    dispatch(nextStep());
    console.log(step);
  };
  const handlePrevClick = () => {
    dispatch(prevStep());
  };

  return (
    <main className={styles.mainCardForm}>
      <Steps />
      <div className={styles.mainContent}>
        <h1>{title}</h1>
        <p className={styles.descriptionMainCard}>{description}</p>
        {renderComponent()}
        <div className={styles.buttons}>
          <button onClick={handlePrevClick} className={styles.backButton}>
            Go Back
          </button>
          <button onClick={handleNextClick} className={styles.nextButton}>
            Next Step
          </button>
        </div>
      </div>
    </main>
  );
}

export default MainCardForm;
