$( document ).ready(function() {
});

const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwhDkEgQeqP-V5rBNchO3LSwTQY0MLDll9K5AJe4JGF3Nua1dMQ4ZcWQbwlDk-mg74g/exec'
  const form = document.forms['contactform']

  form.addEventListener('submit', e => {
  	e.preventDefault()
  	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  		.then(response => alert("Thanks for Contacting us! We Will Contact You Soon."))
        .catch(error => console.error('Error!', error.message))
  })
  


}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}
