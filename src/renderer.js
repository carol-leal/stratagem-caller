const display = document.getElementById("display");
const title = document.getElementById("title");
const input = document.getElementById("stratagem");
const notification = document.getElementById("copy-notification");

const arrowToEmoji = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
};

let stratagemSequence = "";

// Listen for keyboard input
document.addEventListener("keydown", (event) => {
  if (arrowToEmoji[event.key]) {
    stratagemSequence += arrowToEmoji[event.key];
    updateDisplay();
  } else if (event.key === "Backspace") {
    stratagemSequence = stratagemSequence.slice(0, -2);
    updateDisplay();
  } else if (event.key === "Enter") {
    navigator.clipboard.writeText(stratagemSequence).then(() => {
      showNotification("Copied to clipboard!");
    });
    stratagemSequence = "";
    updateDisplay();
  }
});

// Update display and hide title
function updateDisplay() {
  if (stratagemSequence) {
    title.style.opacity = "0";
    display.style.opacity = "1";
    display.innerHTML = stratagemSequence;
  } else {
    title.style.opacity = "1";
    display.style.opacity = "0";
  }
}

// Show custom notification
function showNotification(message) {
  notification.innerText = message;
  notification.style.opacity = "1";

  setTimeout(() => {
    notification.style.opacity = "0";
  }, 2000);
}
