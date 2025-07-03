import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export const ProjectCard = ({
  title,
  description,
  liveLink,
  githubLink,
  videoLink,
}) => {
  return (
    <div className="col-lg-11 col-xl-9 col-xxl-8">
      <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div className="card-body p-0">
          <div className="d-flex align-items-center">
            <div className="p-5">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <h3
                  className="fw-bolder text-gradient"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {title}
                </h3>
              </a>
              <p>{description}</p>

              {videoLink && (
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                  <h5 className="fw-bold" style={{ color: "#007BFF" }}>
                    ▶️ Watch Demo Video
                  </h5>
                </a>
              )}

              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <h4
                    className="fw-bolder"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    GitHub Link
                  </h4>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
