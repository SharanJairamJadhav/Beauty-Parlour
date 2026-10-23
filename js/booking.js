// Booking Form Handling
const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the page from reloading on submit

    // Get basic values to personalize the demo message
    const nameInput = document.getElementById("name").value;
    const serviceSelect = document.getElementById("service");
    const selectedService =
      serviceSelect.options[serviceSelect.selectedIndex].text;

    // Show success message
    formMessage.classList.remove("hidden");
    formMessage.style.display = "block";
    formMessage.style.color = "#28a745"; // Green color for success
    formMessage.style.marginTop = "15px";
    formMessage.style.fontWeight = "500";

    formMessage.innerHTML = `Thank you, ${nameInput}! Your request for "${selectedService}" has been received.<br><small style="color: #666;">(Note: This is a demo form, no real booking was sent.)</small>`;

    // Clear the form fields
    appointmentForm.reset();

    // Hide message automatically after 6 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 6000);
  });
}
