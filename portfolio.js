window.addEventListener("load", showBox);
var box = [];
projects = document.querySelectorAll(".projects ul li");
box = document.querySelectorAll("img");
main = document.querySelector("main");
titre = document.querySelector(".types h1");
project_title = document.querySelector(".projects h1");
me = document.querySelector(".ABOUT img");
let lis = document.querySelectorAll(".types ul li");
about = document.querySelector(".ABOUT .bio");

window.addEventListener("scroll", () => {
  // about
  const aboutTop = about.getBoundingClientRect().top;
  const aboutwindowHeight = window.innerHeight;
  if (aboutTop <= aboutwindowHeight) {
    about.style.opacity = "1";
    about.style.transform = " translateX(0px)";
  } else {
    about.style.opacity = "0";
    about.style.transform = " translateX(150px)";
  }

  const meTop = me.getBoundingClientRect().top;
  const mewindowHeight = window.innerHeight;
  if (meTop <= mewindowHeight) {
    me.style.opacity = "1";
    me.style.transform = " translateX(0px)";
  } else {
    me.style.opacity = "0";
    me.style.transform = " translateX(-150px)";
  }
  //projects div
  const project_titleTop = project_title.getBoundingClientRect().top;
  const project_title_windowHeight = window.innerHeight;
  if (project_titleTop <= project_title_windowHeight) {
    project_title.style.opacity = "1";
    project_title.style.transform = " translateY(0px)";
  } else {
    project_title.style.opacity = "0";
    project_title.style.transform = " translateY(50px)";
  }
  projects.forEach((li) => {
    const liTop = li.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (liTop <= windowHeight) {
      li.style.opacity = "1";
      li.style.transform = " translateY(0px)";
    } else {
      li.style.opacity = "0";
      li.style.transform = " translateY(50px)";
    }
  });
  //skills div
  const titreTop = titre.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (titreTop <= windowHeight) {
    titre.style.opacity = "1";
    titre.style.transform = " translateY(0px)";
  } else {
    titre.style.opacity = "0";
    titre.style.transform = " translateY(50px)";
  }
  lis.forEach((li) => {
    const liTop = li.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (liTop <= windowHeight) {
      li.style.opacity = "1";
      li.style.transform = " translateY(0px)";
    } else {
      li.style.opacity = "0";
      li.style.transform = " translateY(50px)";
    }
  });
});
//hi i`m
function showBox() {
  box.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = " translateX(0px)";
  });
  main.style.opacity = "1";
  main.style.transform = " translateX(0px)";
}
//header change on scrool
var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY > 0;
  header.classList.toggle("scrolled", scrolled);
});
