import React from "react";

export default function Form({ children }) {
  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <form className="row" onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
}
