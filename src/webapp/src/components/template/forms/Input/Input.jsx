import React from "react";

import styles from "./Input.module.css";

export default function Input({ type, value, onchange, placeholder }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <input
        className={`${styles.input} form-control rounded shadow-sm mt-3 w-75 mx-auto `}
        type={type}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        min={0}
        max={30}
      />
    </div>
  );
}
