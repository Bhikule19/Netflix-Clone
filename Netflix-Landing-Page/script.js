function auth() {
  const email1 = document.getElementById("email1").value;
  const email2 = document.getElementById("email2").value;
  if (email1 == "admin@anything.com" || email2 == "admin@anything.com") {
    window.location.assign("/Netflix-Landing-Page/Netflix-Website/index.html");
    alert("Login Succedful");
  } else {
    alert(
      "Invalid email [ Please enter the email provided in the input field ]"
    );
    return;
  }
}
