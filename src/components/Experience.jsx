import React from "react";
import "../styles/Home.css";
import { ExperienceCard } from "./ExperieneCard";
import { EducationCard } from "./EducationCard";
import { SkillCard } from "./SkillCard";
export const Experience = () => {
  return (
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>

        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            <section>
              <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              <ExperienceCard
                year="2024"
                title="Web Designer"
                company="Cyber Age Africa "
                location="Nairobi, Kenya"
                description="CyberAge Africa  is a company that focuses on provding digital solutions ranging from websites to AI solutions.
               
                "
              />
              <ExperienceCard
                year="2024"
                title="Web Designer"
                company="Safari navigator "
                location="Nairobi, Kenya"
                description="Safari Navigator is a company that focuses on improving the travel expeirence of tourists.
                Duties include Theme Development and customization using wordpress
                "
              />
              <ExperienceCard
                year="2023"
                title="Web Designer"
                company="Mia Nane Studios"
                location="Nairobi, Kenya"
                description="Mia Nane Studios is a creative hub, which provides services in mostly artist spaces such as animation, graphic design, concerts, etc.
                Duties include Theme Development and customization using wordpress
                "
              />
              <ExperienceCard
                year="2023"
                title="Web Designer"
                company="PataPic"
                location="Nairobi, Kenya"
                description="PataPic is a photographer located in Nairobi, who has an eye for creating the best moments. 
                Duties included: Theme Development and customization using wordpress
                "
              />
            </section>
            <section>
              <h2 className="text-secondary fw-bolder mb-4">Education</h2>
              <EducationCard
                duration="Nov 2023 - June 2024"
                institution="Moringa School"
                location="Nairobi"
                certificate="Certificate"
                field="Software Development"
                description="Studied web development at Moringa School. Learned the fundamentals of web development with HTML, CSS, JavaScript, React Js, Python, SQL, and Flask and created responsive web pages and robust web applications."
              />
              <EducationCard
                duration="2023"
                institution="Scrimba"
                location="Online"
                certificate="Certificate"
                field="Web Development"
                description="Studied web development at Scrimba. Learned the fundamentals of front-end web development with HTML, CSS, JavaScript, and React Js and created responsive web pages and robust web applications."
              />
              <EducationCard
                duration="2023"
                institution="Google Skills For Africa"
                location=""
                certificate="Certificate"
                field="Digital Marketing"
                description="Certified digital marketer by Google digital skills for Africa. Learned the fundamentals of SEO and SEM management."
              />
            </section>
            <div className="pb-5">
              <section>
                <SkillCard />
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
