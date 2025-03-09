document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    toastr.error("Please fill in all fields.");
    return;
  }

  // Construct mailto link
  let mailtoLink = `mailto:barakadewise@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

  // Attempt to open the default mail client
  window.location.href = mailtoLink;

  // Wait a moment, then check if the mail client opened
  setTimeout(() => {
    if (document.hasFocus()) {
      // If still on the same page, redirect to Gmail
      let gmailLink = `https://mail.google.com/mail/?view=cm&to=barakadewise@gmail.com&su=Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage:%0A${encodeURIComponent(message)}`;
      window.open(gmailLink, "_blank");
      toastr.info("Redirecting to Gmail...");
    } else {
      toastr.success("Opening email client...");
    }
  }, 1500);
});
