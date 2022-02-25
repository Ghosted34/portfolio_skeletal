/*==================== MENU SHOW Y HIDDEN ====================*/
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

/*==================== REMOVE MENU MOBILE ====================*/

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
const themeButton = document.getElementById("theme-btn");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
