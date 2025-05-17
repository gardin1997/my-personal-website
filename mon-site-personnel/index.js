function afficherMessage() {
  const message = document.createElement("p");
  message.textContent = "Merci d’avoir cliqué !";
  message.style.color = "#28a745";
  message.style.fontSize = "1.2em";
  document.body.appendChild(message);
}