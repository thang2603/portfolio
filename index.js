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
