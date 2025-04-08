import React from "react";

import styles from "./ButtonSubmit.module.css";

export default function ButtonSubmit({ text }) {
  return (
    <div className={styles.submit}>
      <button className="btn m-1 text-uppercase text-center">{text}</button>
    </div>
  );
}
