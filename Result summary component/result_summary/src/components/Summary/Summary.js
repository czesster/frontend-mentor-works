import styles from "./Summary.module.css";

const Summary = (props) => {
  return (
    <div className={styles.summary}>
      <p>Summary</p>
      <ul>
        <li>Reaction</li>
        <li>Memory</li>
        <li>Verbal</li>
        <li>Visual</li>
      </ul>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
