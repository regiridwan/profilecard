window.addEventListener("DOMContentLoaded", () => {
  const card = document.getElementById("profile-card");
  const colors = ["#000", "#03a9f4"];

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function changeBackgroundColor() {
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  }

  changeBackgroundColor();
});
