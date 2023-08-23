let google = () => {
  window.location.href =
    "https://accounts.google.com/v3/signin/identifier?dsh=S-603293773%3A1689574388164824&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession";
};

let toggle = document.querySelector("#btn");
console.log(toggle);
let logbtn = document.querySelector("#log");
let regbtn = document.querySelector("#reg");

// toggle button
logbtn.classList.add("active");
logbtn.addEventListener("click", () => {
  toggle.style.left = "0";
  logbtn.classList.add("active");

  regbtn.classList.remove("active");

  let register = document.querySelector("#register");
  let login = document.querySelector("#login");
  let other = document.querySelector("#other");
  other.style.display = "block";
  if (register.style.display === "block") {
    login.style.display = "block";
    register.style.display = "none";
  } else {
    login.style.display = "none";
    register.style.display = "block";
  }
});

regbtn.addEventListener("click", () => {
  toggle.style.left = "110px";
  regbtn.classList.add("active");
  logbtn.classList.remove("active");
  let register = document.querySelector("#register");
  let login = document.querySelector("#login");
  let computedStyle = getComputedStyle(register);
  let other = document.querySelector("#other");
  other.style.display = "none";
  if (computedStyle.display === "none") {
    register.style.display = "block";
    login.style.display = "none";
  } else {
    register.style.display = "none";
    login.style.display = "block";
  }
});
//agree term
function handleCheck() {
  let agree = document.querySelector("#agreeterm");
  let regs = document.querySelector("#regbtn");

  if (agree.checked) {
    regs.style.display = "block";
  } else {
    regs.style.display = "none";
  }
}
let agreecheck = document.querySelector("#agreeterm");
agreecheck.addEventListener("change", handleCheck);

//remember password
function handleChange() {
  let remember = document.querySelector("#rpass");
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#log_password").value;

  if (remember.checked) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
}

let rpass = document.querySelector("#rpass");
rpass.addEventListener("change", handleChange);

// remember passwod fill up
// document.addEventListener("DOMContentLoaded", () => {
document.addEventListener("keyup", () => {
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");

  // document.querySelector("#email").value = email || "";
  if (document.querySelector("#email").value === email) {
    document.querySelector("#log_password").value = password || "";
  } else {
    document.querySelector("#log_password").value;
  }
});
