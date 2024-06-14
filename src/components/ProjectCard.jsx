import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
export const ProjectCard = ({ title, description, liveLink, githubLink }) => {
  return (
    <div className="col-lg-11 col-xl-9 col-xxl-8">
      <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
          <div className="d-flex align-items-center">
            <div className="p-5">
              <Link to={liveLink}>
                <h3
                  className="fw-bolder text-gradient"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {title}
                </h3>
              </Link>
              <p>
                {description}
                <Link to={githubLink}>
                  <h4
                    className="fw-bolder"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Github link
                  </h4>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
