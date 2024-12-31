document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
      }
    });

    if (form.checkValidity()) {
      alert("Form submitted successfully!");
      form.reset();
      inputs.forEach((input) => {
        input.classList.remove("is-valid", "is-invalid");
      });
    }
  });
