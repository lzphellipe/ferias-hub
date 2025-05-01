import React from "react";

import styles from "./style.module.css";

export default function Input({ type, value, onChange, placeholder }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <input
        className={`${styles.input} form-control rounded shadow-sm mt-3 w-75 mx-auto `}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={0}
        max={30}
      />
    </div>
  );
}
