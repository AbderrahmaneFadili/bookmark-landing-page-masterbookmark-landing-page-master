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

  const tabsContent = document.querySelectorAll(".features__tab-content");

  tabLinks.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.classList.add("active");

  tabsContent.forEach((tabC) => tabC.classList.remove("active"));

  bookmarkingTab.classList.add("active");
});

//searching
searching.addEventListener("click", (event) => {
  event.preventDefault();

  const tabLinks = document.querySelectorAll(".features__tabs-tab-link");

  const tabsContent = document.querySelectorAll(".features__tab-content");

  tabLinks.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.classList.add("active");

  tabsContent.forEach((tabC) => tabC.classList.remove("active"));

  searchingTab.classList.add("active");
});

//sharing
sharing.addEventListener("click", (event) => {
  event.preventDefault();

  const tabLinks = document.querySelectorAll(".features__tabs-tab-link");

  const tabsContent = document.querySelectorAll(".features__tab-content");

  tabLinks.forEach((tab) => tab.classList.remove("active"));

  event.currentTarget.classList.add("active");

  tabsContent.forEach((tabC) => tabC.classList.remove("active"));
  sharingTab.classList.add("active");
});
