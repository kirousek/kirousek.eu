const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Skills",
  },
  {
    command: "projects",
    description: "My Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "donate",
    description: "Donate to me"
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Patrik. I am ${getAge(
    "June 20, 2007"
  )} and I\'m a fullstack developer
    <br/><br/>
    I love coding in Javascript, Typescript and Go, and have worked with frameworks like ReactJS, VueJS, Express, and Django. I currently use NextJS and NodeJS in a lot of my projects.
  `,
  education:
    () => `I am a high school student from <a href="https://new.spskladno.cz" target="_blank">SPŠ Kladno</a>.`,
  skills: () => `
  I am experienced with Javascript, Typescript, Python and Go and the web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS, Node.js and PHP<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS and Express<br /></div>
  <div class="skill"><b>database</b>: MongoDB, PostgreSQL, MySQL, and SQLite<br /></div>
<br /><br />
  I also have experience with Linux.
  `,
  projects: getProjects,
  contact: getContacts,
  donate: () => `
  BTC: bc1qrxcn85jx4u0hlgx3qv6pfuh8uhhavnx5ajjazx
  <hr>
  ETH: 0x1c4468EfADf464B224c8bEEd9288380c62FD40CB
  SOL: EoKMn35Ek5cY2fQ4vJ1iNB3LUyvwQzRhjhHRYbqdQAnX
  Ko-fi: <a href="https://ko-fi.com/kirousek" target="_blank">Ko-fi</a>
  `,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}
