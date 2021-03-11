/* --- Open & Close Menu --- */
const openIcon = document.querySelector(".menu-open");
const closeIcon = document.querySelector(".menu-close");
const headerNav = document.querySelector(".header__nav");

openIcon.addEventListener("click", () => {
  headerNav.classList.add("open");
});

closeIcon.addEventListener("click", () => {
  headerNav.classList.remove("open");
});

/* ---  Features Tabs ---  */
//tab links
const bookmarking = document.querySelector("#bookmarking");
const searching = document.querySelector("#searching");
const sharing = document.querySelector("#sharing");

//tab content
const bookmarkingTab = document.querySelector("#bookmarking-tab");
const searchingTab = document.querySelector("#searching-tab");
const sharingTab = document.querySelector("#sharing-tab");

//bookmarking
bookmarking.addEventListener("click", (event) => {
  event.preventDefault();

  const tabLinks = document.querySelectorAll(".features__tabs-tab-link");

  const tabItems = document.querySelectorAll(".features__tabs-item");

  const tabsContent = document.querySelectorAll(".features__tab-content");

  tabLinks.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.classList.add("active");

  tabsContent.forEach((tabC) => tabC.classList.remove("active"));

  tabItems.forEach((tbi) => tbi.classList.remove("active"));

  bookmarkingTab.classList.add("active");

  event.target.parentElement.className += " active";
});

//searching
searching.addEventListener("click", (event) => {
  event.preventDefault();

  const tabLinks = document.querySelectorAll(".features__tabs-tab-link");

  const tabItems = document.querySelectorAll(".features__tabs-item");

  const tabsContent = document.querySelectorAll(".features__tab-content");

  tabLinks.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.classList.add("active");

  event.target.parentElement.className.replace("active", "");

  tabsContent.forEach((tabC) => tabC.classList.remove("active"));

  tabItems.forEach((tbi) => tbi.classList.remove("active"));

  searchingTab.classList.add("active");

  event.target.parentElement.className += " active";
});

//sharing
sharing.addEventListener("click", (event) => {
  event.preventDefault();

  const tabLinks = document.querySelectorAll(".features__tabs-tab-link");

  const tabItems = document.querySelectorAll(".features__tabs-item");

  const tabsContent = document.querySelectorAll(".features__tab-content");

  tabLinks.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.classList.add("active");

  tabsContent.forEach((tabC) => tabC.classList.remove("active"));

  tabItems.forEach((tbi) => tbi.classList.remove("active"));

  sharingTab.classList.add("active");

  event.target.parentElement.className += " active";
});

/* ----- FAQ Accordion ---- */
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    question.nextElementSibling.classList.toggle("active");
    question.classList.toggle("active");
  });
});

/* ----- Submit  ----- */
const form = document.querySelector(".contact-us__form");

const emailInput = document.querySelector(".contact-us__form__email");

const errorIcon = document.querySelector(".fa-exclamation-circle");

const errorMessage = document.querySelector(".contact-us__form-error-message");

const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailExpression.test(emailInput.value)) {
    errorIcon.classList.add("error");
    errorMessage.classList.add("error");
  } else {
    errorIcon.classList.remove("error");
    errorMessage.classList.remove("error");
  }
});
