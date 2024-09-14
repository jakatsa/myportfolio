import React from "react";
import { MdBuild } from "react-icons/md";

export const SkillCard = () => {
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="mb-5">
          <div className="d-flex align-items-center mb-4">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <MdBuild />
            </div>
            <h3 className="fw-bolder mb-0">
              <span className="text-gradient d-inline">
                Professional Skills
              </span>
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                SEO/SEM Marketing
              </div>
            </div>
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                Adobe illustrator
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                Web Development
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                WordPress
              </div>
            </div>
          </div>
        </div>
        <div className="mb-0">
          <div className="d-flex align-items-center mb-4">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
              <i className="bi bi-code-slash">{"</>"}</i>
            </div>
            <h3 className="fw-bolder mb-0">
              <span className="text-gradient d-inline">Languages</span>
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-md-3 mb-4">
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                HTML
              </div>
            </div>
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                CSS
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                JavaScript
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                React
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                WordPress Framework
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4 mb-md-0">
              <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                MySql
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
