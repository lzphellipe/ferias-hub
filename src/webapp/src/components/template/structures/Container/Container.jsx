import React from "react";

export default function Container({ children }) {
  return (
    //<main className="w-100 h-100 ps-5 pe-5 m-0 ">{children}</main>;
    <main className="container mt-5 d-flex flex-column justify-content-center ">
      {children}
    </main>
  );
}
