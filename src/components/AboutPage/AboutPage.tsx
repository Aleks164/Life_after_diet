import React from "react";

export const AboutPage = () => (
  <div className="aboutCont">
    <div className="aboutPicture"></div>
    <div className="shortInfo">
      <h4>Web-site "Life after diet..." </h4>
      <div>
        Developed by:
        <div>
          <a href="mailto:alekseyleha@mail.ru" rel="noreferrer" target="_blank">
            alekseyleha@mail.ru
          </a>
        </div>
        <div>
          <a
            title="https://github.com/Aleks164"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Aleks164"
          >
            Aleks164
          </a>
        </div>
      </div>
    </div>

    <div className="mainDescription">
      The application implements:
      <br />
      - client routing;
      <br />
      - remote storage - Firebase Realtime Database;
      <br />
      - supports authentification with login-password and Google
      <br />- a parameterized link that you can save and return to at any time
      to see a specific recipe{" "}
      <a
        title="https://aleks164.github.io/task-calendar/tasks?onlyDone=true&fuzzySelect=date&fuzzyInput=27"
        target="_blank"
        rel="noreferrer"
        href="https://aleks164.github.io/task-calendar/tasks?onlyDone=true&fuzzySelect=date&fuzzyInput=27"
      >
        (Examle)
      </a>
      <br />
      The application is written in React with TS.
      <br />
      Сonfigured Continuous Integration and Continuous Delivery (CI/CD).
      <p>
        More information on{" "}
        <a
          title="https://github.com/Aleks164/Life_after_diet/tree/diet_App"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Aleks164/Life_after_diet/tree/diet_App"
        >
          GitHubRepo
        </a>
      </p>
    </div>
  </div>
);
