document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    //(a) preventDefault() stops the form submission and allows us to handle the form data with JavaScript instead.
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let country = document.getElementById("country").value;

    if (!validate(firstName, lastName, email)) {
      alert("Please provide valid input.");
      return;
    }

    displayContent(firstName, lastName, email, gender, country);
  });

function validate(firstName, lastName, email) {
  let firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  let lastNameRegex = /^[a-zA-Z'-]+$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return (
    firstNameRegex.test(firstName) &&
    lastNameRegex.test(lastName) &&
    emailRegex.test(email)
  );
}

function displayContent(firstName, lastName, email, gender, country) {
  //(b) To keep the previously submitted data, modify outputDiv.innerHTML = to outputDiv.innerHTML +=, which will append the new content to the existing data instead of replacing it
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
      <h2>Submitted Data</h2>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Gender: ${gender}</p>
      <p>Country: ${country}</p>
  `;
}
