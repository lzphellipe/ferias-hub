import React from "react";

import styles from "./ButtonSubmit.module.css";

export default function ButtonSubmit({ text, type }) {
  return (
    <div
      className={`${styles.submit} container d-flex justify-content-center align-items-center`}
    >
      <button
        type={type}
        className="btn m-1 text-uppercase text-center rounded shadow-sm w-75 mx-auto"
      >
        {text}
      </button>
    </div>
  );
}
