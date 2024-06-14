import React from "react";

import "../styles/Home.css";
export const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">Copyright &copy; Joe Akatsa</div>
          </div>
          <div className="col-auto">
            <a className="small" href="contact.html">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
