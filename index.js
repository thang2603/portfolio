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

var id = 1;
const controlTetinalNext = (length) => {
  id = id + 1;
  if (id > length) {
    id = length
  }
  for (let i = 1; i <= length; i++) {
    document.getElementById(`show-slide-${i}`).style.display = 'none'
  }
  document.getElementById(`show-slide-${id}`).style.display = 'flex'

}

const controlTetinalPre = (length) => {
  id = id - 1;
  if (id < 1) {
    id = 1;
  }
  for (let i = 1; i <= length; i++) {
    document.getElementById(`show-slide-${i}`).style.display = 'none'
  }
  document.getElementById(`show-slide-${id}`).style.display = 'flex'

}