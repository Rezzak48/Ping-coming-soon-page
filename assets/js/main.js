// ====== Js Function =======

// ====== VALIDATION FUNCTION =======
// ====== PREVENT FUNCTION =======

// form.addEventListener("keydown", () => {

function validation() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    error.innerHTML = " Valid Email ";
    error.style.color = "green";
  } else {
    error.innerHTML = "Please provide a valid email address";
    error.style.color = "red";
  }

  if (email == "") {
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  }
}

form.addEventListener("submit", (ev) => {
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(pattern)) {
    ev.preventDefault();
  }
});
