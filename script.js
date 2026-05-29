const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");
const dateInput = document.querySelector('input[name="dates"]');
const packageInput = document.querySelector('input[name="package"]');
const packageButtons = document.querySelectorAll(".package-select");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");
const whatsappNumber = "6594557473";
const monthTabs = document.querySelectorAll(".month-tab");
const availabilityList = document.querySelector(".availability-list");
const locationCount = document.querySelector(".location-count");

const monthlyAvailability = {
  jun: {
    title: "June 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "Northpoint City - Level 1 - NS-A", date: "01/06 - 07/06/26", status: "NEW", pic: "May" },
      { venue: "Junction 8 - Level 2 - Atrium C", date: "01/06 - 07/06/26", pic: "Raymond" },
      { venue: "White Sands - Level 1 - Atrium K01", date: "01/06 - 07/06/26", status: "NEW", pic: "Steve" },
      { venue: "White Sands - Level 1 - Atrium K04 & K05", date: "01/06 - 07/06/26", status: "NEW", pic: "Steve" },
      { venue: "AMK Hub - Basement 1-A", date: "01/06 - 07/06/26", pic: "Tracy" },
      { venue: "Novena Velocity - Level 1 - A1+A3", date: "01/06 - 07/06/26", pic: "May" },
      { venue: "AMK Hub - B1-C Atrium", date: "01/06 - 14/06/26", status: "NEW" },
      { venue: "Westgate - Level 2 - Atrium F", date: "01/06 - 14/06/26", theme: "Food Fair", pic: "Tracy" },
      { venue: "Square 2 - Level 1 Atrium (Plot A)", date: "01/06 - 14/06/26", theme: "Black Aluminium Set", pic: "Tracy" },
      { venue: "Jurong Point - Level 1 - PS1", date: "01/06 - 28/06/26", pic: "Tracy" },
      { venue: "Yew Tee Point - L1 (A4 Atrium Space)", date: "01/06 - 30/06/26", pic: "May" },
      { venue: "Northpoint City - Level 1 - NS-C2", date: "08/06 - 14/06/26", status: "NEW", pic: "May" },
      { venue: "Clementi Mall - L3 Event Square", date: "08/06 - 14/06/26", pic: "Steve" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "08/06 - 18/06/26", status: "add 4 days", pic: "Steve" },
      { venue: "AMK Hub - Basement 2 - Full", date: "08/06 - 21/06/26", pic: "Tracy" },
      { venue: "JEM - Basement 1 - Jem Market", date: "08/06 - 21/06/26", theme: "NO Ins & NO Bank", pic: "Steve" },
      { venue: "Waterway Point - Basement 2 - A+B+C", date: "08/06 - 21/06/26", theme: "Bed & Furniture / X Beds", pic: "May" },
      { venue: "AMK Hub - B1-D Atrium", date: "15/06 - 19/06/26", theme: "AIA Insurance", status: "NEW", pic: "Nic" },
      { venue: "Lot One - Level 1 - Atrium A1 + A+B", date: "15/06 - 28/06/26", theme: "Festive products", pic: "Raymond" },
      { venue: "Eastpoint - Level 1 - Main Atrium", date: "15/06 - 28/06/26", theme: "Live Cooking Fair", pic: "Tracy" },
      { venue: "Westgate - Level 2 - Atrium F", date: "15/06 - 28/06/26", theme: "Family Theme", pic: "Tracy" },
      { venue: "Parkway Parade - B1 - Airwell 1", date: "15/06 - 28/06/26", pic: "Raymond" },
      { venue: "White Sands - Level 1 K01-K05", date: "22/06 - 28/06/26", status: "NEW", pic: "Steve" },
      { venue: "The Woodleigh Mall - B1 Event Space", date: "22/06 - 28/06/26", theme: "Prudential Insurance", pic: "Chris" },
      { venue: "Junction 8 - Level 1 - Full Atrium C", date: "22/06 - 05/07/26", status: "NEW", pic: "Steve" },
      { venue: "Toa Payoh Hub", date: "22/06 - 19/07/26", pic: "Yanyee" },
    ],
  },
  jul: {
    title: "July 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "JEM - Basement 1 - Jem Market", date: "06/07 - 12/07/26", pic: "Steve" },
      { venue: "Great World City - Level 1 - Full Atrium", date: "06/07 - 12/07/26", theme: "Live cooking fair", status: "NEW", pic: "Tracy" },
      { venue: "Hougang Mall - Level 1 - Atrium B", date: "06/07 - 19/07/26", theme: "NO Ins & NO Bank", status: "+1 week", pic: "Steve" },
      { venue: "Waterway Point - Basement 1 - A+B+C", date: "06/07 - 19/07/26", theme: "Bed & Furniture", pic: "May" },
      { venue: "Eastpoint - Level 1 - Main Atrium", date: "06/07 - 19/07/26", pic: "Tracy" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "06/07 - 19/07/26", pic: "Steve" },
      { venue: "Northpoint - L1 (North Square: NS-C)", date: "06/07 - 19/07/26", pic: "May" },
      { venue: "Square 2 - Level 1 Atrium (Plot A)", date: "06/07 - 19/07/26", pic: "Tracy" },
      { venue: "Seletar Mall - Level 1 - Atrium B", date: "07/07 - 20/07/26", theme: "FIFA Food Fair", status: "NEW", pic: "Tracy" },
      { venue: "Novena Velocity - Level 1 - Atrium A2", date: "13/07 - 19/07/26", status: "NEW", pic: "May" },
      { venue: "Junction 8 - Level 2 - Atrium C", date: "13/07 - 19/07/26", pic: "Raymond" },
      { venue: "Waterway Point - Basement 2 - A+B+C", date: "13/07 - 19/07/26", theme: "Bed & Furniture", pic: "May" },
      { venue: "AMK Hub - Basement 1 - A2", date: "13/07 - 19/07/26", pic: "Tracy" },
      { venue: "AMK Hub - Basement 2 - Full Atrium", date: "13/07 - 19/07/26", pic: "Tracy" },
      { venue: "Lot One - Level 1 - Atrium A1 + A+B", date: "13/07 - 19/07/26", status: "-1 week", pic: "Tracy" },
      { venue: "Sun Plaza - Level 2 - Atrium A", date: "13/07 - 26/07/26", pic: "Steve" },
      { venue: "Northpoint - L1 (South Atrium: SA-C)", date: "13/07 - 26/07/26", theme: "Food", pic: "May" },
      { venue: "Yew Tee Point - B1 (Outside Challenger)", date: "16/07 - 29/07/26", pic: "May" },
      { venue: "Hillion Mall - B3 - MRT Linkway", date: "20/07 - 26/07/26", theme: "Prudential Insurance", status: "NEW", pic: "Chris" },
      { venue: "Novena Velocity - Level 1 - Atrium A1+A3", date: "20/07 - 26/07/26", status: "NEW", pic: "May" },
      { venue: "Hougang Mall - Level 1 - Full Atrium", date: "20/07 - 26/07/26", theme: "Teo Chew Fair", status: "NEW", pic: "Tracy" },
      { venue: "AMK Hub - Basement 2", date: "20/07 - 02/08/26", status: "NEW", pic: "Tracy" },
      { venue: "White Sands - Level 1 - K02-K05", date: "20/07 - 02/08/26", pic: "Steve" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "20/07 - 02/08/26", pic: "Steve" },
      { venue: "Seletar Mall - Level 1 - Event Space E", date: "21/07 - 27/07/26", theme: "Firstcom", pic: "Jie Dong" },
      { venue: "Bedok Mall - Level 1 - Full Atrium", date: "22/07 - 28/07/26", status: "change date", pic: "Raymond" },
      { venue: "Hillion Mall - Basement 2 - Full Atrium", date: "23/07 - 05/08/26", pic: "Tracy" },
      { venue: "Clementi Mall - L3 - Event Square", date: "27/07 - 02/08/26", theme: "National Day Fair", pic: "Steve" },
      { venue: "The Seletar Mall - Level 1 - Atrium A+B", date: "28/07 - 03/08/26", theme: "Food & Lifestyle Fair", pic: "Steve" },
      { venue: "Yew Tee Point - Basement 1 - Area B2", date: "30/07 - 05/08/26", pic: "May" },
    ],
  },
  aug: {
    title: "August 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "Northpoint - L1 (South Atrium: SA-C)", date: "03/08 - 16/08/26", theme: "Lifestyle (SG)", pic: "May" },
      { venue: "AMK Hub - Basement 2 - Atrium A", date: "03/08 - 16/08/26", pic: "Tracy" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "03/08 - 16/08/26", theme: "Live Food Fair", pic: "Steve" },
      { venue: "Square 2 - Level 1 Atrium (Plot A)", date: "03/08 - 16/08/26", theme: "Black Aluminium Set", pic: "Tracy" },
      { venue: "Westgate - Level 2 - Atrium F", date: "03/08 - 16/08/26", theme: "Food Fair", pic: "Tracy" },
      { venue: "Seletar Mall - Level 1 - Event Space E", date: "04/08 - 10/08/26", theme: "Firstcom", pic: "Jie Dong" },
      { venue: "The Seletar Mall - Level 1 Atrium A", date: "04/08 - 10/08/26", theme: "Food & Lifestyle Fair", pic: "Steve" },
      { venue: "Bedok Mall - Level 1 Atrium", date: "05/08 - 11/08/26", pic: "Raymond" },
      { venue: "Waterway Point - Basement 1 & 2", date: "10/08 - 16/08/26", theme: "Bed & Furniture", pic: "May" },
      { venue: "White Sands - Level 1 - Outdoor", date: "10/08 - 16/08/26", theme: "Prudential Insurance", status: "NEW", pic: "Chris" },
      { venue: "JEM - Basement 1 - Jem Market", date: "10/08 - 23/08/26", theme: "NO Ins & NO Bank", status: "TBC", pic: "Steve" },
      { venue: "AMK Hub - Basement 1 - A1", date: "10/08 - 23/08/26", status: "NEW", pic: "Tracy" },
      { venue: "Sun Plaza - Level 2 - Atrium A", date: "17/08 - 30/08/26", pic: "Steve" },
      { venue: "Eastpoint - Level 1 - Main Atrium", date: "17/08 - 30/08/26", pic: "Tracy" },
      { venue: "Yew Tee Point - B1 (Outside Challenger)", date: "20/08 - 02/09/26", pic: "May" },
      { venue: "Waterway Point - Basement 2 - A+B", date: "24/08 - 30/08/26", theme: "X Bed & Furniture", pic: "May" },
      { venue: "Westgate - Level 2 - Atrium F", date: "24/08 - 06/09/26", status: "Date closed 31/08 - 06/09", pic: "Tracy" },
      { venue: "Junction 8 - Level 2 - Atrium C", date: "24/08 - 06/09/26", pic: "Raymond" },
      { venue: "AMK Hub - Basement 2 - Full", date: "31/08 - 27/09/26", theme: "Mid-Autumn", pic: "Kim" },
      { venue: "Compass One - Level 2 - Area A1, A6, A4", date: "31/08 - 27/09/26", theme: "Mid-Autumn Festival", pic: "Kim, Nic" },
    ],
  },
  sep: {
    title: "September 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "AMK Hub - Basement 1 - D Atrium", date: "07/09 - 13/09/26", theme: "Prudential Insurance", status: "NEW", pic: "Chris" },
      { venue: "Northpoint - L1 (South Atrium: SA-B & SA-C)", date: "07/09 - 13/09/26", pic: "May" },
      { venue: "Waterway Point - Basement 2 - B+C", date: "07/09 - 13/09/26", pic: "May" },
      { venue: "Northpoint - L1 (North Square: NS-A)", date: "07/09 - 20/09/26", pic: "May" },
      { venue: "Waterway Point - Level 1 - A+B", date: "07/09 - 20/09/26", theme: "Live Cooking Food Fair", pic: "Nic, Tracy" },
      { venue: "Westgate - Level 2 - Atrium F", date: "07/09 - 25/09/26", theme: "Mid-Autumn Fair", status: "NEW", pic: "Kim" },
      { venue: "Square 2 - Level 1 Atrium (Plot A)", date: "07/09 - 27/09/26", theme: "Black Aluminium Set", pic: "Tracy" },
      { venue: "Lot One - Level 1 - Atrium A1 + A+B", date: "08/09 - 25/09/26", theme: "Mid-Autumn Fair", status: "NEW", pic: "Kim" },
      { venue: "The Seletar Mall - Level 1 - Atrium A+B", date: "08/09 - 14/09/26", theme: "Food & Lifestyle Fair", pic: "Steve" },
      { venue: "Hillion Mall - B2 - Full Atrium", date: "10/09 - 23/09/26", theme: "Mid-Autumn", pic: "Raymond" },
      { venue: "Sun Plaza - Level 2 - Atrium A", date: "14/09 - 27/09/26", pic: "Steve" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "14/09 - 27/09/26", theme: "Mid Autumn", pic: "Raymond" },
      { venue: "West Mall - Level 1 - Atrium A", date: "14/09 - 27/09/26", theme: "MAF + Food & Lifestyle", status: "NEW", pic: "Kim" },
      { venue: "Eastpoint - Level 1 - Main Atrium", date: "14/09 - 27/09/26", pic: "Tracy" },
      { venue: "AMK Hub - Basement 1 - A", date: "14/09 - 27/09/26", pic: "Tracy" },
      { venue: "Seletar Mall - Level 1 - Event Space E", date: "15/09 - 21/09/26", theme: "Firstcom", pic: "Jie Dong" },
      { venue: "Bedok Mall - Level 1 - Full Atrium", date: "16/09 - 25/09/26", theme: "Mid-Autumn Fair", status: "NEW", pic: "Kim" },
      { venue: "Junction 8 - Level 2 - Atrium C", date: "21/09 - 27/09/26", pic: "Raymond" },
      { venue: "Waterway Point - Basement 2 - A+B", date: "21/09 - 27/09/26", pic: "May" },
      { venue: "Westgate - Level 2 - Atrium F", date: "28/09 - 04/10/26", pic: "Tracy" },
    ],
  },
  oct: {
    title: "October 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "Yew Tee Point - L1 - A4 Atrium Space", date: "01/10 - 31/10/26", pic: "May" },
      { venue: "JEM - Basement 1 - Jem Market", date: "05/10 - 18/10/26", theme: "NO Ins & NO Bank", status: "TBC", pic: "Steve" },
      { venue: "Eastpoint - Level 1 - Main Atrium", date: "05/10 - 18/10/26", pic: "Tracy" },
      { venue: "Northpoint - L1 (North Square: NS-C)", date: "05/10 - 18/10/26", pic: "May" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "05/10 - 18/10/26", pic: "Steve" },
      { venue: "Square 2 - Level 1 Atrium (Plot A)", date: "05/10 - 18/10/26", theme: "Black Aluminium Set", pic: "Tracy" },
      { venue: "Seletar Mall - Level 1 - Event Space E", date: "06/10 - 12/10/26", theme: "Firstcom", status: "NEW", pic: "Jie Dong" },
      { venue: "Bedok Mall - Level 1 Atrium", date: "07/10 - 13/10/26", pic: "Raymond" },
      { venue: "Waterway Point - Basement 1 - A+B", date: "12/10 - 18/10/26", theme: "X Bed & Furniture", pic: "May" },
      { venue: "Junction 8 - Level 2 - Atrium C", date: "19/10 - 25/10/26", pic: "Raymond" },
      { venue: "White Sands - Level 1 - K01-K05", date: "19/10 - 01/11/26", pic: "Steve" },
      { venue: "Square 2 - Level 1 Atrium (Plot A)", date: "19/10 - 01/11/26", pic: "Tracy" },
      { venue: "Waterway Point - Basement 1 & 2", date: "26/10 - 01/11/26", theme: "Bed & Furniture", pic: "May" },
    ],
  },
  nov: {
    title: "November 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "Yew Tee Point - L1 - A4 Atrium Space", date: "01/11 - 30/11/26", pic: "May" },
      { venue: "White Sands - Level 1 - K02-K05", date: "02/11 - 08/11/26", status: "NEW", pic: "Steve" },
      { venue: "The Woodleigh Mall - B1 Event Space", date: "02/11 - 08/11/26", theme: "Prudential Insurance", pic: "Chris" },
      { venue: "Clementi Mall - L3 Event Square", date: "02/11 - 08/11/26", pic: "Steve" },
      { venue: "Northpoint - L1 (North Square: NA-A)", date: "02/11 - 08/11/26", theme: "Deepavali Fair", pic: "Raymond" },
      { venue: "Westgate - Level 2 - Atrium F", date: "02/11 - 15/11/26", theme: "Food Fair", pic: "Tracy" },
      { venue: "Parkway Parade - Maxwell 2", date: "02/11 - 15/11/26", pic: "Raymond" },
      { venue: "AMK Hub - Basement 1 - A2", date: "02/11 - 15/11/26", pic: "Tracy" },
      { venue: "Waterway Point - Basement 2 - A+B+C", date: "02/11 - 15/11/26", theme: "X Bed & Furniture / Bed & Furniture", pic: "May" },
      { venue: "Bedok Mall - Level 1 Atrium", date: "04/11 - 10/11/26", pic: "Raymond" },
      { venue: "Yew Tee Point - B1 (Outside Challenger)", date: "12/11 - 25/11/26", pic: "May" },
      { venue: "White Sands - Level 1 - K02-K05", date: "16/11 - 22/11/26", status: "NEW", pic: "Steve" },
      { venue: "Clementi Mall - Level 3 - Main Atrium", date: "16/11 - 22/11/26", pic: "Steve" },
      { venue: "Sun Plaza - Level 2 - Atrium A", date: "16/11 - 29/11/26", pic: "Steve" },
      { venue: "AMK Hub - Basement 2 - Full", date: "16/11 - 29/11/26", pic: "Tracy" },
      { venue: "JEM - Basement 1 - Jem Market", date: "16/11 - 29/11/26", pic: "Steve" },
      { venue: "Seletar Mall - Level 1 - Event Space E", date: "17/11 - 23/11/26", theme: "Firstcom", pic: "Jie Dong" },
      { venue: "Waterway Point - Basement 2 - A+B+C", date: "23/11 - 29/11/26", theme: "X Bed & Furniture", pic: "May" },
      { venue: "White Sands - Level 1 - K01-K05", date: "23/11 - 29/11/26", pic: "Steve" },
      { venue: "Novena Velocity - Level 1 - Atrium A1+A3", date: "23/11 - 29/11/26", pic: "May" },
      { venue: "Yew Tee Point - B1 (Outside Challenger)", date: "26/11 - 09/12/26", pic: "May" },
      { venue: "White Sands - Level 1 - K02-K05", date: "30/11 - 06/12/26", pic: "Steve" },
      { venue: "The Woodleigh Mall - B1 Event Space", date: "30/11 - 06/12/26", theme: "InfoTech-Skillfute", status: "NEW", pic: "Chris" },
      { venue: "Junction 8 - Level 2 - Atrium C", date: "30/11 - 06/12/26", pic: "Raymond" },
      { venue: "Westgate - Level 2 - Atrium F", date: "30/11 - 13/12/26", pic: "Tracy" },
    ],
  },
  dec: {
    title: "December 2026",
    updated: "As at 26/05/2026",
    items: [
      { venue: "Seletar Mall - Level 1 - Event Space E", date: "01/12 - 07/12/26", theme: "Firstcom", pic: "Jie Dong" },
      { venue: "Yew Tee Point - L1 (A3 Atrium Space)", date: "01/12 - 31/12/26", pic: "May" },
      { venue: "JEM - Basement 1 - Jem Market", date: "07/12 - 20/12/26", theme: "NO Ins & NO Bank", status: "TBC", pic: "Steve" },
      { venue: "White Sands - Level 1 - Main Atrium", date: "07/12/26 - 03/01/27", pic: "Steve" },
      { venue: "Yew Tee Point - Basement 1 - Area B2", date: "10/12 - 23/12/26", pic: "May" },
      { venue: "Waterway Point - Basement 2 - A+B+C", date: "14/12 - 20/12/26", theme: "X Bed & Furniture", pic: "May" },
      { venue: "Waterway Point - Basement 2 - A+B+C", date: "21/12 - 27/12/26", theme: "Bed & Furniture", pic: "May" },
      { venue: "Bedok Mall - Level 1 Atrium", date: "16/12 - 22/12/26", pic: "Raymond" },
      { venue: "Hillion Mall - B2 - Full Atrium", date: "17/12 - 30/12/26", theme: "Christmas Fair", pic: "Raymond" },
      { venue: "White Sands - Level 1 - K01-K05", date: "21/12 - 27/12/26", status: "NEW", pic: "Steve" },
      { venue: "Yew Tee Point - B1 (Outside Challenger)", date: "31/12 - 06/01/27", pic: "May" },
    ],
  },
};

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

document.querySelectorAll('a[href="#contact"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", "#contact");
  });
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[character]));
}

function simplifyVenue(venue) {
  const normalized = venue
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*/g, " - ")
    .trim();
  const level = normalized.match(/\b(?:Level|Basement)\s*\d(?:\s*&\s*\d)?\b|\b[LB]\d\b/i);

  if (!level) return normalized;

  return normalized
    .slice(0, level.index + level[0].length)
    .replace(/\bL(\d)\b/i, "Level $1")
    .replace(/\bB(\d)\b/i, "Basement $1")
    .trim();
}

function prepareAvailabilityItems(items) {
  const seen = new Set();

  return items.reduce((prepared, item) => {
    const venue = simplifyVenue(item.venue);
    const key = `${item.date}::${venue}`;

    if (seen.has(key)) return prepared;
    seen.add(key);

    prepared.push({ ...item, venue });
    return prepared;
  }, []);
}

function groupByDate(items) {
  return items.reduce((groups, item) => {
    const existing = groups.find((group) => group.date === item.date);

    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ date: item.date, items: [item] });
    }

    return groups;
  }, []);
}

function renderAvailability(month) {
  if (!availabilityList) return;

  const data = monthlyAvailability[month];
  const items = prepareAvailabilityItems(data?.items || []);
  const groups = groupByDate(items);

  monthTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.month === month);
  });

  if (locationCount) {
    const count = items.length;
    locationCount.innerHTML = `<strong>${count}</strong><span>${count === 1 ? "location" : "locations"}</span>`;
  }

  if (!data || items.length === 0) {
    availabilityList.innerHTML = `
      <div class="availability-empty">
        <span>${data?.title || "Coming Soon"}</span>
        <h3>Availability list coming soon.</h3>
        <p>Send us your preferred month and product category. We will check booth options for you.</p>
      </div>
    `;
    return;
  }

  availabilityList.innerHTML = `
    <div class="availability-grid">
      ${groups.map((group) => `
        <section class="date-group" aria-label="${escapeHtml(group.date)} booth locations">
          <div class="date-group-header">
            <span class="availability-date">${escapeHtml(group.date)}</span>
            <strong>${group.items.length} ${group.items.length === 1 ? "location" : "locations"}</strong>
          </div>
          <div class="date-group-scroll">
            ${group.items.map((item) => `
              <button class="availability-card availability-select" type="button" data-venue="${escapeHtml(item.venue)}" data-date="${escapeHtml(item.date)}">
                <strong>${escapeHtml(item.venue)}</strong>
              </button>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

monthTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderAvailability(tab.dataset.month);
  });
});

availabilityList?.addEventListener("click", (event) => {
  const button = event.target.closest(".availability-select");
  if (!button) return;

  dateInput.value = `${button.dataset.venue} - ${button.dataset.date}`;
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, "", "#contact");
  note.textContent = "Selected booth filled in. Complete the form to send on WhatsApp.";
});

renderAvailability("jun");

if (floatingWhatsapp) {
  floatingWhatsapp.href = "#contact";
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
