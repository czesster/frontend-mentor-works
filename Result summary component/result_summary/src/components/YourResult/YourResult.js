import styles from "./YourResults.module.css";

const YourResult = (props) => {
  const calculateAverage = () => {
    return Math.round(
      props.data.results.reduce((acc, el) => acc + el.score, 0) /
        props.data.results.length
    );
  };

  return (
    <div className={styles.result}>
      <p className={styles.result__header}>Your Result</p>
      <div className={styles.result__value}>
        <div className={styles.value__score}>{calculateAverage()}</div>
        <div className={styles.value__of}>of 100</div>
      </div>
      <p className={styles.result__grade}>Great</p>
      <p className={styles.result__desc}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default YourResult;
