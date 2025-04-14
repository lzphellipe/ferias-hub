import React from "react";

import styles from "./Welcome.module.css";

export default function Welcome({ name }) {
  return (
    <div
      className={`${styles.welcomeContainer} col p-0 container d-flex justify-content-center align-items-center`}
    >
      <h3 className="my-4">Olá, {name} </h3>
    </div>
  );
}
