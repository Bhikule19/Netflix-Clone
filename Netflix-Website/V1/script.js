let navbar = document.getElementById("navbar");

const toggle = () => {
  if (navbar.style.display == "none") {
    navbar.style.display = "block";
    navbar.style.textAlign = "left";
  } else {
    navbar.style.display = "none";
  }
};
