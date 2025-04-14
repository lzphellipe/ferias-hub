import React from "react";

export default function SectionHeader({ children }) {
  return (
    //<header className="row w-100 m-0  d-flex flex-column justify-content-center align-items-center">
    <header className="container mt-5 d-flex justify-content-center">
      {children}
    </header>
  );
}
