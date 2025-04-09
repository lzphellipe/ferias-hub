import React from "react";

import styles from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={`${styles.welcomeContainer} col p-0 container`}>
      <h3 className="my-4">Olá, Maria!</h3>
    </div>
  );
}
