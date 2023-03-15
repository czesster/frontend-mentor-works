import YourResult from "../YourResult/YourResult";
import Summary from "../Summary/Summary";
import styles from "./ResultsSummary.module.css";

const ResultsSummary = (props) => {
  return (
    <div className={styles["results__background"]}>
      <YourResult />
      <Summary />
    </div>
  );
};

export default ResultsSummary;
