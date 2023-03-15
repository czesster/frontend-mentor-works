import YourResult from "../YourResult/YourResult";
import styles from "./ResultsSummary.module.css";

const ResultsSummary = (props) => {
  return (
    <div className={styles["results__background"]}>
      <YourResult />
      <p></p>
    </div>
  );
};

export default ResultsSummary;
