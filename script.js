const whatsappNumber = "6594557473";
const whatsappMessage = [
  "Hi SG Booth Rental, I would like to enquire about booth rental.",
  "",
  "Product type:",
  "Preferred mall:",
  "Preferred dates:",
].join("\n");

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const bookingForm = document.querySelector(".booking-form");
const bookingNote = document.querySelector(".booking-note");
const selectedVenueInput = document.querySelector('input[name="selectedVenue"]');
const selectedDateInput = document.querySelector('input[name="selectedDate"]');

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

document.querySelectorAll(".slot-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".slot-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");

    if (selectedVenueInput) selectedVenueInput.value = card.dataset.venue || "";
    if (selectedDateInput) selectedDateInput.value = card.dataset.date || "";

    document.querySelector("#booking").scrollIntoView({ behavior: "smooth", block: "start" });

    if (bookingNote) {
      bookingNote.textContent = "Selected slot added. Fill 3 fields to send your WhatsApp enquiry.";
    }
  });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const willOpen = !item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
      faqItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const getValue = (name) => formData.get(name)?.toString().trim() || "-";

  if (!getValue("selectedVenue") || getValue("selectedVenue") === "-") {
    bookingNote.textContent = "Please tap a mall/date card first.";
    document.querySelector("#availability").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const message = [
    "Hi SG Booth Rental, I would like to send a booking enquiry.",
    "",
    `Name: ${getValue("name")}`,
    `WhatsApp Number: ${getValue("whatsapp")}`,
    `Product Category: ${getValue("category")}`,
    `Selected Venue: ${getValue("selectedVenue")}`,
    `Selected Date: ${getValue("selectedDate")}`,
    `Message: ${getValue("message")}`,
  ].join("\n");

  const bookingUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const whatsappWindow = window.open(bookingUrl, "_blank", "noopener,noreferrer");

  if (whatsappWindow) {
    bookingNote.textContent = "Opening WhatsApp with your booking enquiry...";
  } else {
    bookingNote.replaceChildren("WhatsApp did not open. ", Object.assign(document.createElement("a"), {
      href: bookingUrl,
      target: "_blank",
      rel: "noreferrer",
      textContent: "Tap here to send your enquiry.",
    }));
  }
});
