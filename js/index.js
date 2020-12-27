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


function buildHeader() {
  fetch("./HTMLcomponents/header.html")
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });
}

function buildFooter() {
  fetch("./HTMLcomponents/footer.html")
  .then(response => {
    return response.text();
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  })
}

function buildldSocialBars() {
  fetch("./HTMLcomponents/socialBar.html")
  .then(response => {
    return response.text();
  })
  .then(data => {
    socialBarList = document.querySelectorAll(".socialBar");
    socialBarList.forEach(element => {
      element.innerHTML = data;
    })
  })
}

// Iteratively add HTML logo figures
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
  "NodeJs": "../asset/nodejs2.svg",
  "Pillow": "../asset/pillow.png",
  "Express": "../asset/express.svg",
  "Matplotlib": "../asset/matplotlib.svg"
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
  const elementArr = document.querySelectorAll(".tech__icons");
  elementArr.forEach(element => {
    const logoNameArr = getLogoNamesData(element);
    logoNameArr.forEach(logo => {
      const HTMLfigure = createLogo(logo);
      element.appendChild(HTMLfigure);
    })
  });
}

// Add the necessary 52 fizzy spots of the fizzy buttons
const FIZZY_SPOTS_NUM = 52;
function buildFizzyButtons() {
  // Create fizzy-spots-container node
  const fizzySpotContainer = document.createElement("div");
  fizzySpotContainer.classList.add("fizzy-spots-container");
  // Create fizzy-spot node
  const fizzySpot = document.createElement("div");
  fizzySpot.classList.add("fizzy-spot");

  // Start the function by selecting all fizzy buttons
  const buttonList = document.querySelectorAll(".button--fizzy");
  buttonList.forEach(button => {
    // Add fizzy-spots-container
    button.appendChild(fizzySpotContainer.cloneNode(true));
    const container = button.querySelector(".fizzy-spots-container");
    // Add 52 fizzy-spots children divs to fizzy-spots-container
    for (let i = 0; i < FIZZY_SPOTS_NUM; i++) {
      container.appendChild(fizzySpot.cloneNode(true));
    }
  })
}

// function sendEmail() {
//   const formSpreeUrl = "https://formspree.io/f/xnqoobeb";
//   const contactForm = document.querySelector("footer");
//   contactForm.addEventListener("submit", event => {
//     event.preventDefault();
//     console.log("OK");
//     contactForm.reset();
//     alert("OK");
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", formSpreeUrl);
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState !== XMLHttpRequest.DONE) return;
    //   if (xhr.status === 200) {
    //     contactForm.reset();
    //     alert("Thank you for your email");
    //   } else {
    //     alert("Something is wrong");
    //   }
    // };
    // xhr.send(new FormData(contactForm));
//   })
//   return false;
// }

window.onload = function() {
  buildHeader();
  typeName();
  buildFooter();
  createAllLogos();
  buildldSocialBars();
  buildFizzyButtons();
  // sendEmail();
}