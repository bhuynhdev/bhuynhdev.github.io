document.addEventListener('scroll', function(e) {
  "use strict";
  e.preventDefault();
  // Select header section
  const header = document.querySelector('header');
  if (window.scrollop >= 50 || document.documentElement.scrollTop >= 50) {
    // header.classList.remove('.header--fixed-top');
    header.classList.add('header--fixed-top-scrolled');
  } else {
    // header.classList.add('header--fixed-top');
    header.classList.remove('header--fixed-top-scrolled');
  }
});

function typeName() {
  const options = {
    strings: [document.querySelector(".typing").dataset.content],
    typeSpeed: 120,
    // onComplete: function(self) { self.cursor.remove() }
  };

  const typed = new Typed(".typing", options);
};

const logoPaths = {
  'Python': "../asset/python.svg",
  "React": "../asset/react.svg",
  "SQLite": "../asset/sqlite2.svg",
  "C++": "../asset/cpp.svg",
  "Javascript": "../asset/javascript.svg",
  "HTML": "../asset/html.svg",
  "CSS": "../asset/css.svg",
  "Sass": "../asset/sass.svg",
  "MongoDB": "../asset/mongodb2.svg",
  "Git": "../asset/git.svg",
  "GitHub": "../asset/github.svg",
  "VSCode": "../asset/vscode.svg",
  "NodeJs": "../asset/nodejs2.svg"
};

function getLogoNamesData(element) {
  const skillString = element.dataset.skills;
  const skillArr = skillString.split(',');
  return skillArr;
}

function createLogo(logoName) {
  const template = document.querySelector('template');
  const instance = document.importNode(template.content, true);
  const fig = instance.querySelector("figure");
  fig.querySelector("img").src = logoPaths[logoName];
  fig.querySelector("img").alt = logoPaths[logoName] + " logo";
  fig.querySelector("figcaption").textContent = logoName;
  return instance;
}

function createAllLogos() {
  const elementArr = document.querySelectorAll(".skill__icons");
  elementArr.forEach(element => {
    const logoNameArr = getLogoNamesData(element);
    logoNameArr.forEach(logo => {
      const HTMLfigure = createLogo(logo);
      element.appendChild(HTMLfigure);
    })
  });
}

window.onload = function() {
  typeName();
  createAllLogos();
}