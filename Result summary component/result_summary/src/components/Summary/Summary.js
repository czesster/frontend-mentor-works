import styles from "./Summary.module.css";
import reaction from "../../assets/images/icon-reaction.svg";
import memory from "../../assets/images/icon-memory.svg";
import verbal from "../../assets/images/icon-verbal.svg";
import visual from "../../assets/images/icon-visual.svg";

const Summary = (props) => {
  return (
    <div className={styles.summary}>
      <p className={styles.summary__title}>Summary</p>
      <ul>
        <li>
          <img src={reaction} alt="reaction icon" />
          <p>Reaction</p>
          <p className={styles.summary__score}>
            <span class={styles.score__value}>80</span>
            <span class={styles.score__of}> / 100</span>
          </p>
        </li>
        <li>
          <img src={memory} alt="memory icon" />
          <p>Memory</p>
          <p className={styles.summary__score}>
            <span class={styles.score__value}>92</span>
            <span class={styles.score__of}> / 100</span>
          </p>
        </li>
        <li>
          <img src={verbal} alt="verbal icon" />
          <p>Verbal</p>
          <p className={styles.summary__score}>
            <span class={styles.score__value}>61</span>
            <span class={styles.score__of}> / 100</span>
          </p>
        </li>
        <li>
          <img src={visual} alt="visual icon" />
          <p>Visual</p>
          <p className={styles.summary__score}>
            <span class={styles.score__value}>72</span>
            <span class={styles.score__of}> / 100</span>
          </p>
        </li>
      </ul>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
