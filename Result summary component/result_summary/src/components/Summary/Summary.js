import styles from "./Summary.module.css";
import reaction from "../../assets/images/icon-reaction.svg";
import memory from "../../assets/images/icon-memory.svg";
import verbal from "../../assets/images/icon-verbal.svg";
import visual from "../../assets/images/icon-visual.svg";

const Summary = (props) => {
  const getIconName = (url) => {
    return url.split("-")[1].split(".")[0];
  };

  // icons need to be in specific order dependant on order of render
  const iconsPathsArr = [reaction, memory, verbal, visual];

  return (
    <div className={styles.summary}>
      <p className={styles.summary__title}>Summary</p>
      <ul>
        {props.data.results.map((el, i) => {
          return (
            <li key={el.id}>
              <img
                src={iconsPathsArr[i]}
                alt={`${getIconName(el.icon)} icon`}
              />
              <p>{el.category}</p>
              <p className={styles.summary__score}>
                <span className={styles.score__value}>{el.score}</span>
                <span className={styles.score__of}> / 100</span>
              </p>
            </li>
          );
        })}
      </ul>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
