const bottomNav = document.querySelector(".bottomnav__container");
const bottomNavItem = document.querySelectorAll(".bottomnav__item");
const windowText = document.querySelector(".container__widget--smtext");
let themeAttribute = bottomNav.getAttribute("data-themeColor");

//css Theme list, Theme should exist in css file
let themeList = [
  "default-theme",
  "purple-theme",
  "bluish-theme",
  "orange-theme",
  "reddish-theme",
];

//loop each button in list
bottomNavItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    //remove all themes from container before adding new ones
    themeList.forEach(function (item) {
      bottomNav.classList.remove(item);
    });

    //use id from array of buttons to determine theme to be displayed
    switch (index) {
      case 0:
        bottomNav.setAttribute("data-themeColor", themeList[index]);
        themeAttribute = bottomNav.getAttribute("data-themeColor");
        bottomNav.classList.add(themeAttribute);
        windowText.innerText = "[ Theme default ]";
        break;
      case 1:
        bottomNav.setAttribute("data-themeColor", themeList[index]);
        themeAttribute = bottomNav.getAttribute("data-themeColor");
        bottomNav.classList.add(themeAttribute);
        windowText.innerText = "[ Theme purple ]";
        break;
      case 2:
        bottomNav.setAttribute("data-themeColor", themeList[index]);
        themeAttribute = bottomNav.getAttribute("data-themeColor");
        bottomNav.classList.add(themeAttribute);
        windowText.innerText = "[ Theme Bluish ]";
        break;
      case 3:
        bottomNav.setAttribute("data-themeColor", themeList[index]);
        themeAttribute = bottomNav.getAttribute("data-themeColor");
        bottomNav.classList.add(themeAttribute);
        windowText.innerText = "[ Theme Orange ]";
        break;
      case 4:
        bottomNav.setAttribute("data-themeColor", themeList[index]);
        themeAttribute = bottomNav.getAttribute("data-themeColor");
        bottomNav.classList.add(themeAttribute);
        windowText.innerText = "[ Theme Reddish ]";
        break;
      default:
        bottomNav.setAttribute("data-themeColor", themeList[index]);
        themeAttribute = bottomNav.getAttribute("data-themeColor");
        bottomNav.classList.add(themeAttribute);
        break;
    }
  });
});

/**
 * PWA JS
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then((registration) => {
      console.log("SW regsitered");
    })
    .catch((error) => {
      console.log("SW failed");
      console.log(error);
    });
}
