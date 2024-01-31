const changeTab = (tab) => {
  let arrTab = document.getElementsByClassName("chose-tab");
  for (let i = 0; i < arrTab.length; i++) {
    arrTab[i].style.display = "none";
  }

  document.getElementById(tab).style.display = "flex";
};

const scrollToSection = (sectionId) => {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const openModal = () => {
  document.getElementById("body").style.position = "fixed";
  document.getElementById("modal").style.display = "block";
  document.getElementById("menu-list-nav").style.display = "flex";
};

const closeModal = (sectionId) => {
  document.getElementById("body").style.position = "relative";
  document.getElementById("modal").style.display = "none";
  document.getElementById("menu-list-nav").style.display = "none";
  scrollToSection(sectionId);
};

const clearModal = () => {
  document.getElementById("body").style.position = "relative";
  document.getElementById("modal").style.display = "none";
  document.getElementById("menu-list-nav").style.display = "none";
};
