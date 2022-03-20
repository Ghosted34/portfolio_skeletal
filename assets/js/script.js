const main = document.querySelector("main"),
  footer = document.querySelector("footer"),
  loader = document.querySelector(".loader-container");
document.body.style.overflow = "hidden";

main.style.display = footer.style.display = "none";

window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = footer.style.display = "block";
  document.body.style.overflow = "auto";
});

const navigation = document.querySelector("#nav-menu"),
  navToggle = document.querySelector(".toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show");
    navToggle.classList.toggle("show");
  });
}

const navIcons = document.querySelectorAll("a.nav-link");

const remover = () => {
  const navigation = document.querySelector("#nav-menu"),
    navToggle = document.querySelector(".toggle");
  navigation.classList.remove("show");
  navToggle.classList.remove("show");
};

navIcons.forEach((navIcon) => navIcon.addEventListener("click", remover));

/*==================== ACCORDION SKILLS ====================*/
const skills = document.querySelectorAll(".skills-content"),
  skillContent = document.querySelectorAll(".content-header");

function toggleShow() {
  let itemClass = this.parentNode.className;

  for (const skill of skills) {
    skill.className = "skills-content close";
  }

  if (itemClass === "skills-content close") {
    this.parentNode.className = "skills-content open";
  }
}

skillContent.forEach((el) => {
  el.addEventListener("click", toggleShow);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("quali-active");
    });
    target.classList.add("quali-active");

    tabs.forEach((tab) => {
      tab.classList.remove("quali-active");
    });
    tab.classList.add("quali-active");
  });
});
/*==================== SERVICES MODAL ====================*/
const modalView = document.querySelector(".modal"),
  modalBtn = document.querySelector(".service-btn"),
  modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", () => {
  modalView.classList.add("active-modal");
});

modalClose.addEventListener("click", () => {
  modalView.classList.remove("active-modal");
});
/*==================== PORTFOLIO SWIPER  ====================*/

const swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
const scrollTop = () => {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollTop);
/*==================== DARK LIGHT THEME ====================*/

const themeBtn = document.getElementById("theme-btn");
const root = document.querySelector(":root");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === null && prefersDarkScheme.matches) {
  themeBtn.classList.replace("fa-moon", "fa-sun");
}

if (currentTheme === "dark") {
  root.classList.toggle("dark-theme");
  themeBtn.classList.replace("fa-moon", "fa-sun");
} else if (currentTheme === "light") {
  root.classList.toggle("light-theme");
  themeBtn.classList.replace("fa-sun", "fa-moon");
}

themeBtn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    root.classList.toggle("light-theme");
    var theme = root.classList.contains("light-theme") ? "light" : "dark";
  } else {
    root.classList.toggle("dark-theme");
    var theme = root.classList.contains("dark-theme") ? "dark" : "light";
  }

  theme === "dark"
    ? themeBtn.classList.replace("fa-moon", "fa-sun")
    : themeBtn.classList.replace("fa-sun", "fa-moon");

  localStorage.setItem("theme", theme);
});
