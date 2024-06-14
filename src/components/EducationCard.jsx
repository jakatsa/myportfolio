import React from "react";

export const EducationCard = ({
  duration,
  institution,
  location,
  certificate,
  field,
  description,
}) => {
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="row align-items-center gx-5">
          <div className="col text-center text-lg-start mb-4 mb-lg-0">
            <div className="bg-light p-4 rounded-4">
              <div className="text-secondary fw-bolder mb-2">{duration}</div>
              <div className="mb-2">
                <div className="small fw-bolder">
                  <a href="#">{institution}</a>
                </div>
                <div className="small text-muted">{location}</div>
              </div>
              <div className="fst-italic">
                <div className="small text-muted">{certificate}</div>
                <div className="small text-muted">{field}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
