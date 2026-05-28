const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");
const packageInput = document.querySelector('input[name="package"]');
const packageButtons = document.querySelectorAll(".package-select");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");
const whatsappNumber = "60103787851";

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

if (floatingWhatsapp) {
  floatingWhatsapp.href = "#contact";
  floatingWhatsapp.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
}

packageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    packageInput.value = button.dataset.package || "";
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    note.textContent = `${packageInput.value} selected. Complete the form to send on WhatsApp.`;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const getValue = (name) => formData.get(name)?.toString().trim() || "-";
  const message = [
    "Hi SG Booth Rental, I would like to enquire about a booth space.",
    "",
    `Name: ${getValue("name")}`,
    `Contact: ${getValue("contact")}`,
    `Product category: ${getValue("category")}`,
    `Preferred dates: ${getValue("dates")}`,
    `Selected package: ${getValue("package")}`,
    `Message: ${getValue("message")}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (whatsappWindow) {
    note.textContent = "Opening WhatsApp with your enquiry...";
  } else {
    note.replaceChildren("WhatsApp did not open. ", Object.assign(document.createElement("a"), {
      href: whatsappUrl,
      target: "_blank",
      rel: "noreferrer",
      textContent: "Click here to send your enquiry.",
    }));
  }

  form.reset();
});
