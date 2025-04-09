import React from "react";

export default function SectionHeader({ children }) {
  return (
    <header className="row w-100 m-0 justify-content-between align-items-center">
      {children}
    </header>
  );
}
