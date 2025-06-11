
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  // Name validation: not empty, letters and spaces only
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Name can only contain letters and spaces.");
    return false;
  }

  // Email validation: basic pattern check
  if (email === "") {
    alert("Please enter your email.");
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Service validation: check if selected (optional if you have a default)
  if (service === "") {
    alert("Please select a service.");
    return false;
  }

  // Message validation: not empty
  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  // If all validations pass
  return true;
}

