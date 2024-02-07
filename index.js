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
  document.getElementById(`show-slide-1`).style.animation = `slide1 1.5s`
  document.getElementById(`show-slide-1`).style.display = 'none'
  document.getElementById(`show-slide-2`).style.display = 'flex'
  document.getElementById(`show-slide-2`).style.animation = `slide2 1.5s`
}

const controlTetinalPre = (length) => {
  document.getElementById(`show-slide-1`).style.animation = `slide1 1.5s reverse`
  document.getElementById(`show-slide-1`).style.display = 'flex'
  document.getElementById(`show-slide-2`).style.display = 'none'
  document.getElementById(`show-slide-2`).style.animation = `slide2 1.5s reverse`
}
var idFeature = 0
const controlFeaturesPre = () => {
  idFeature = idFeature - 1;
  if (idFeature < 0) {
    idFeature = 0
  }
  let tempSlides = document.getElementsByClassName('features-box')

  for (let i = 0; i < tempSlides.length; i++) {
    if (i < idFeature || i >= idFeature + 3) {
      tempSlides[i].style.display = 'none'
    }
    else {
      tempSlides[i].style.display = 'flex'
    }
  }
}

const controlFeaturesNext = () => {
  idFeature = idFeature + 1;
  let tempSlides = document.getElementsByClassName('features-box')
  if (idFeature >= tempSlides.length - 3) {
    idFeature = tempSlides.length - 3
  }

  for (let i = 0; i < tempSlides.length; i++) {
    if (i < idFeature || i >= idFeature + 3) {
      tempSlides[i].style.display = 'none'
    }
    else {
      tempSlides[i].style.display = 'flex'
    }
  }
}