import React from "react";

export const AboutPage = () => (
  <div>
    <div>
      <div className="aboutPicture"></div>
      <div>
        <h4>"Life after diet..." web-site</h4>
        <div>
          <div>
            <a target="_blank" href="mailto:alekseyleha@mail.ru"></a>
            <a href="mailto:alekseyleha@mail.ru" target="_blank">
              alekseyleha@mail.ru
            </a>
          </div>
          <div>
            <a
              title="https://github.com/Aleks164"
              target="_blank"
              href="https://github.com/Aleks164"
            ></a>
            <a
              title="https://github.com/Aleks164"
              target="_blank"
              href="https://github.com/Aleks164"
            >
              Aleks164
            </a>
          </div>
        </div>
      </div>
    </div>
    <div>
      The application implements:
      <br />
      - client routing;
      <br />
      - remote storage - Firebase Realtime Database;
      <br />- supports authentification with login-password and Google
      <a
        title="https://aleks164.github.io/task-calendar/tasks?onlyDone=true&fuzzySelect=date&fuzzyInput=27"
        target="_blank"
        href="https://aleks164.github.io/task-calendar/tasks?onlyDone=true&fuzzySelect=date&fuzzyInput=27"
      >
        (Examle)
      </a>
      ;<br />
      The application is written in React with TS
      <p>
        More information on
        <a
          title="https://github.com/Aleks164/task-calendar/tree/redux/toolkit"
          target="_blank"
          href="https://github.com/Aleks164/task-calendar/tree/redux/toolkit"
        >
          GitHubRepo
        </a>
      </p>
    </div>
  </div>
);
