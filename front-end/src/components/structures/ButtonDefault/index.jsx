import styles from "./style.module.css";

const ButtonDefault = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonDefault;
