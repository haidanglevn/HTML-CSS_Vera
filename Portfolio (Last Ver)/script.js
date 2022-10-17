projectImg = document.getElementsByClassName("project-img");
modal = document.querySelectorAll(".modal");
modalContainer = document.querySelector(".modal-content");
let link, title, p, modalContent;
console.log("modal ", modal);
topBtn = document.getElementById("Top");

const openModal = (value) => {
  console.log(value);
  modal.forEach((content) => {
    if (content.id == value) {
      console.log("content.id: ", content.id);
      document.getElementById(content.id).style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
};
const closeModal = () => {
  modal.forEach((content) => {
    content.style.display = "none";
    document.body.style.overflow = "auto";
  });
};

window.onscroll = function () {
  showTopButton();
};

function showTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function scrollUp() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
