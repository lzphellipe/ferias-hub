import React from "react";

import styles from "./Input.module.css";

export default function Input({ type, value, onchange }) {
  return (
    <input
      className={`${styles.input} form-control rounded`}
      type={type}
      value={value}
      onChange={onchange}
    />
  );
}
