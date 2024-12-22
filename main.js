document.addEventListener("DOMContentLoaded", function () {
  // Preloader logic
  setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
  }, 2000);

  const startDate = new Date("2023-12-03T00:00:00");

  // Timer
  function updateTimer() {
      const now = new Date();
      const diff = now - startDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
  }

  setInterval(updateTimer, 1000);
});

function revealChoice(card, title, message) {
  card.innerHTML = `<div class="card-content"><h2>${title}</h2><p>${message}</p></div>`;
}

