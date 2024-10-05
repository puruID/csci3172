function inFocus(temp) {
  temp.classList.add("active");
}

function outFocus(temp) {
  temp.classList.remove("active");
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

firstName.addEventListener(
  "focus",
  function () {
    inFocus(firstName);
  },
  false
);
firstName.addEventListener(
  "blur",
  function () {
    outFocus(firstName);
  },
  false
);

lastName.addEventListener(
  "focus",
  function () {
    inFocus(lastName);
  },
  false
);
lastName.addEventListener(
  "blur",
  function () {
    outFocus(lastName);
  },
  false
);

email.addEventListener(
  "focus",
  function () {
    inFocus(email);
  },
  false
);
email.addEventListener(
  "focus",
  function () {
    outFocus(email);
  },
  false
);

password.addEventListener(
  "focus",
  function () {
    inFocus(password);
  },
  false
);
password.addEventListener(
  "blur",
  function () {
    outFocus(password);
  },
  false
);

function validate() {
  let firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  let lastNameRegex = /^[a-zA-Z'-]+$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_$--!%*?&])[A-Za-z\d@_$--!%*?&]{12,}$/;

  let firstNameValue = document.getElementById("firstName").value;
  let lastNameValue = document.getElementById("lastName").value;
  let emailValue = document.getElementById("email").value;
  let passwordValue = document.getElementById("password").value;

  let isValid = true;

  if (!firstNameRegex.test(firstNameValue)) {
    alert("There is an error in the first name");
    isValid = false;
  } else if (!lastNameRegex.test(lastNameValue)) {
    alert(
      "There is an error in the last name. It should only contain letters, apostrophes, or hyphens."
    );
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    alert("There is an error in the email format. Please enter a valid email.");
    isValid = false;
  } else if (!passwordRegex.test(passwordValue)) {
    alert(
      "Password must contain at least 12 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
    );
    isValid = false;
  }

  if (isValid) {
    alert("The form is successfully submitted");
    return true;
  } else {
    alert("There are some errors in your form submission");
    return false;
  }
}
