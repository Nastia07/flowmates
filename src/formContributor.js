// Get a reference to the form element
const form = document.querySelector("#form-contributor");
const modal1 = document.querySelector("[data-modal]");

// Get a reference to the form fields inside the submit event listener
form.addEventListener("submit", function (event) {
  const firstName = form.querySelector("#first-name").value;
  const secondName = form.querySelector("#second-name").value;
  const email = form.querySelector("#email").value;
  const phone = form.querySelector("#phone").value;
  const company = form.querySelector("#company").value;
  const position = form.querySelector("#position").value;

  function toggleModal() {
    modal1.classList.toggle("is-hidden");
  }

  // Define the request payload
  const data = {
    firstName: firstName,
    secondName: secondName,
    email: email,
    phone: phone,
    company: company,
    position: position,
  };
  console.log(data);

  fetch(
    "https://nodered-8421-6458c0faa779951100000006.ubos.tech/submitFormContributor",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      toggleModal();
    })
    .catch((error) => {
      console.error(error);
    });

  // Prevent the default form submission behavior only if the fetch request is successful
  // event.preventDefault();
});
