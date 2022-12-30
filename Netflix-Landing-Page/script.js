function auth() {
  const email1 = document.getElementById("email1").value;
  const email2 = document.getElementById("email2").value;
  if (email1 == "admin@gmail.com" || email2 == "admin@gmail.com") {
    window.location.assign("./Netflix-Website/V2/index.html");
    alert("login Succedfull");
  } else {
    alert("Invalid email");
    return;
  }
}
