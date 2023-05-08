// Get a reference to the form element
const form1 = document.querySelector("#form-citizenDev");
const modal = document.querySelector("[data-modal]");
// Get a reference to the form fields inside the submit event listener
form1.addEventListener("submit", function (event) {
  const firstName = form1.querySelector("#first-name").value;
  const secondName = form1.querySelector("#second-name").value;
  const email = form1.querySelector("#email").value;
  const phone = form1.querySelector("#phone").value;
  const company = form1.querySelector("#company").value;
  const position = form1.querySelector("#position").value;

  function toggleModal() {
    modal.classList.toggle("is-hidden");
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
    "https://nodered-8421-6458c0faa779951100000006.ubos.tech/submitFormCitizenDev",
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
  event.preventDefault();
});
