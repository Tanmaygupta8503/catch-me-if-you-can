const box = document.getElementById("box");

function changeBoxPosition() {
  const viewportWidth = window.innerWidth - box.offsetWidth;
  const viewportHeight = window.innerHeight - box.offsetHeight;

  const randomLeft = Math.floor(Math.random() * viewportWidth);
  const randomTop = Math.floor(Math.random() * viewportHeight);

  box.style.left = `${randomLeft}px`;
  box.style.top = `${randomTop}px`;
}

box.addEventListener("mouseover", changeBoxPosition);