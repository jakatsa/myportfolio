import React from "react";
import { ProjectCard } from "./ProjectCard";
export const Projects = () => {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <main class="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Projects</span>
              </h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <ProjectCard
                title="Dorcas Oduor (Attorney General Kenya)"
                description="I had the honor of working on Kenya's first femlae Attorney General's personal website.This project was created using wordpress CMS"
                liveLink="https://dorcasoduor.com/"
              />
              <ProjectCard
                title="Safari Navigator"
                description="I had the honor of working with Safari Navigator, a brand that is focused on improving the travel and tourism industry. 
                This project was created using wordpress CMS"
                liveLink="https://safari-navigator.club/"
              />
              {/* Project Cards */}
              <ProjectCard
                title="React Contact Manager"
                description="ContactBook is a lightweight contact manager application built with React, designed to simplify the process of storing and managing contacts directly within the browser.The application has also been dockerized"
                liveLink="https://contactmanager-93ih.vercel.app/"
                githubLink="https://github.com/jakatsa/contactmanager"
              />
              <ProjectCard
                title="React Food Recipe Project"
                description="All of your favorite recipes in one place."
                liveLink="https://foodierecipe.vercel.app/"
                githubLink="https://github.com/jakatsa/foodierecipe"
              />
              <ProjectCard
                title="React Gallery Project"
                description="Simple gallery with images from the Pixabay API. Tailwind CSS is built into workflow with PostCSS and Autoprefixer."
                liveLink="https://galla254.netlify.app/"
                githubLink="https://github.com/jakatsa/gallery"
              />
              <ProjectCard
                title="React Ecommerce project"
                description="This is a React frontend project which is fully responsive. It goes through concepts such as Redux.js, use of Context API, and Firebase for authentication."
                liveLink="https://ecommerce-frontend-iota-woad.vercel.app/"
                githubLink="https://github.com/jakatsa/ecommerce-frontend"
              />

              <ProjectCard
                title="React travel journal"
                description="The second Scrimba React solo project builds on the knowledge gained by the first. It then introduces working with props, using a data page containing an array of objects, and using the JavaScript map method to render components."
                liveLink="https://reacttraveljournal.netlify.app/"
                githubLink="https://github.com/jakatsa/traveljournal"
              />

              <ProjectCard
                title="Github Search Application"
                description="This is a web application that allows users to search for GitHub users by their username. Upon entering a search term, the app fetches and displays a list of matching GitHub users along with their profile pictures and profile URLs. Users can then view repositories associated with each user by clicking the Show repositories button, which retrieves and lists the repositories, including their names and URLs. The app provides a simple and intuitive interface to explore GitHub profiles and repositories."
                liveLink="https://github-search-app-zeta-eight.vercel.app/"
                githubLink="https://github.com/jakatsa/Github-Search-app"
              />

              <ProjectCard
                title="BlackJack Game"
                description="The game is meant to be played by clicking a 'New Card' button, which invokes the newCard() function, and it displays messages and updates the card and sum accordingly. The goal is to get as close to 21 without going over it and to achieve blackjack when the sum is exactly 21. If the player's sum exceeds 21, they are 'out of the game.'"
                liveLink="https://cqvtkluh62xbo7adaiqcba.on.drv.tw/www.BlackJack%20Game.com/"
                githubLink="https://github.com/jakatsa/blackjackgame"
              />
              <ProjectCard
                title="WeatherMate"
                description="This project shows the use of web APIs which pulls information from a weather website. The next step is to create an API that pulls music from Spotify."
                liveLink="https://cqvtkluh62xbo7adaiqcba.on.drv.tw/www.weatherapp.com/weather%20app/"
                githubLink="https://github.com/jakatsa/weathermate"
              />
              <ProjectCard
                title="BasketBall ScorerBoard"
                description="This project basically covers the fundamentals of JavaScript such as manipulation of the DOM."
                liveLink="https://dashing-maamoul-25b2f4.netlify.app/"
                githubLink="https://github.com/jakatsa/BasketBall-Score-board"
              />
              <ProjectCard
                title="E-mail Validation Form"
                description="Introducing my Email and Password Validator, a handy JavaScript tool that ensures the accuracy and security of user credentials. This project uses the JavaScript concept of regular expressions to create the validator."
                liveLink="https://cqvtkluh62xbo7adaiqcba.on.drv.tw/www.E-mail%20validation.com/"
                githubLink="https://github.com/jakatsa/Email-Validation-Form"
              />
              <ProjectCard
                title="To-Do List"
                description="This project basically covers the fundamentals of JavaScript such as manipulation of the DOM."
                liveLink="https://cqvtkluh62xbo7adaiqcba.on.drv.tw/www.TODOLIST.com/"
              />
              {/* Add more ProjectCard components for other projects */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
