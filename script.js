// Mobilní menu
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Zvýraznění dnešního dne + stav "otevřeno / zavřeno" v kartě otevírací doby
const hoursList = document.getElementById('hours-list');
const hoursStatus = document.getElementById('hours-status');

if (hoursList && hoursStatus) {
  const now = new Date();
  const todayIndex = now.getDay(); // 0 = neděle ... 6 = sobota

  const todayItem = hoursList.querySelector(`li[data-day="${todayIndex}"]`);
  if (todayItem) {
    todayItem.classList.add('today');
  }

  // Otevírací doba je denně 9:00–20:00
  const openHour = 9;
  const closeHour = 20;
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const isOpenNow = currentHour >= openHour && currentHour < closeHour;

  hoursStatus.textContent = isOpenNow
    ? 'Právě teď máme otevřeno.'
    : 'Právě teď je zavřeno — otevíráme denně v 9:00.';
}

// Rok v patičce
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
