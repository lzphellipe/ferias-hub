import React from "react";
import styles from "./index.module.css";

const ButtonDefault = ({ onClick, text }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonDefault;
