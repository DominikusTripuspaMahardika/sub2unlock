let progress = 0;

// Daftar username dan password
const credentials = [
  { username: "hJKlNA", password: "TxrvQg" },
  { username: "AsbdKE", password: "BcRtXm" },
  { username: "klMnTA", password: "qWeTyU" },
  { username: "PoLzMA", password: "fGhJqT" },
  { username: "bNcRkJ", password: "YuIoZp" },
  { username: "QwErTy", password: "LpMnBk" },
  { username: "ZaSdQx", password: "ErTyUi" },
  { username: "PlMnKj", password: "HjUkIo" },
  { username: "RqTxBk", password: "NmLoIj" },
  { username: "TyUiOp", password: "ZaLxQp" },
  { username: "ZaMkNj", password: "PoErTz" },
  { username: "QxErTy", password: "KoNnLl" },
  { username: "YuMzNj", password: "PoYtEr" },
  { username: "KlBnJk", password: "QzLnKo" },
  { username: "OpQxNl", password: "NzLoQk" },
  { username: "TzPmLk", password: "QoNnJz" },
  { username: "ErTyUi", password: "JkPlMx" },
  { username: "LmNqRt", password: "NxMkKp" },
  { username: "XqPlNm", password: "OoNzJk" },
  { username: "LkTzNq", password: "ErQzQm" },
  { username: "MkNzQp", password: "LpQxNz" },
  { username: "TxErQz", password: "JqTkQm" },
  { username: "ErTnQm", password: "LzNmQp" },
  { username: "MxTkZp", password: "PlNmLk" },
  { username: "QzPnLk", password: "QoMkLx" },
  { username: "TxZpQk", password: "PnNqLk" },
  { username: "NmJzPn", password: "LxQnNz" },
  { username: "QkLzMk", password: "NqPnTx" },
  { username: "JzNmQk", password: "TkQmNq" },
  { username: "PnNqZp", password: "JzQkTx" },
  { username: "LkJzQo", password: "TkQnZp" },
  { username: "NmLxQp", password: "MkQnLk" },
  { username: "TxJzQo", password: "ZpQkNq" },
  { username: "QpMkQx", password: "PnTxQo" },
  { username: "NmLkJz", password: "QpTkQm" },
  { username: "QnMkPn", password: "QkTxPn" },
  { username: "JzQoNm", password: "LkQmNq" },
  { username: "TkQnLk", password: "QoQkTx" },
  { username: "QpTxLx", password: "NmLkMk" },
  { username: "PnQmLk", password: "NqTkJz" },
  { username: "JqLkQo", password: "MkQoTx" },
  { username: "QkLxTx", password: "QnLkPn" },
  { username: "NmPnTx", password: "LxQpQo" },
  { username: "QnQkTx", password: "JzLxQm" },
  { username: "NmTkQo", password: "MkQpLk" },
  { username: "LkQmJz", password: "TxNmPn" },
  { username: "PnQnTx", password: "QkQpQo" },
  { username: "QpQkLk", password: "TkQnMk" },
  { username: "JzTxQo", password: "QpTxLx" },
  { username: "NmJzLk", password: "MkLkQn" }
];

// Function to update progress
function updateProgress() {
  progress++;
  const progressText = document.getElementById("progress-text");
  const progressTextSpan = progressText.querySelector(".progress-text");
  progressTextSpan.textContent = `${progress}/2`;

  // Update progress bar width
  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = (progress / 2) * 100;
  progressBar.style.width = `${progressPercentage}%`;

  // Fade in the progress text with smooth transition
  progressText.style.opacity = 0; // Start with opacity 0
  setTimeout(() => {
    progressText.style.opacity = 1; // Fade in with a smooth transition
  }, 100);
}

// Function to show popup
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
}

// Function to hide popup
function hidePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Simulate loading for actions
async function simulateLoading(buttonId) {
  const button = document.getElementById(buttonId);
  return new Promise((resolve) => {
    button.disabled = true;
    button.classList.remove("active");
    showPopup();
    setTimeout(() => {
      hidePopup();
      button.classList.add("completed");
      resolve();
    }, 2000);
  });
}

// Handle button click actions
async function handleClick(action) {
  switch (action) {
    case "subscribe":
      await simulateLoading("subscribe-btn");
      document.getElementById("follow-btn").disabled = false;
      document.getElementById("follow-btn").classList.add("active");
      window.open("https://www.youtube.com/channel/UCnlvfhUF0ucjcHVeuxudRsg", "_blank");
      updateProgress();
      break;
    case "follow":
      await simulateLoading("follow-btn");
      document.getElementById("unlock-button").disabled = false;
      document.getElementById("unlock-button").classList.add("active");
      window.open("https://instagram.com/zeapplefjx_dika", "_blank");
      updateProgress();
      break;
  }
}

// Function to display username and password randomly
function showRandomUsernamePassword() {
  const randomIndex = Math.floor(Math.random() * credentials.length);
  const selectedCredentials = credentials[randomIndex];
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popupContent.innerHTML = `Username: ${selectedCredentials.username}<br>Password: ${selectedCredentials.password}`;
  popup.style.display = "flex";
}

// Unlock page and display random username and password
function unlockPage() {
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popupContent.textContent = "Preparing your credentials, please wait!";
  popup.style.display = "flex";

  let countdown = 10; // Adjust countdown as needed
  const interval = setInterval(() => {
    popupContent.textContent = `Your Username & Password is being processed, please wait! (${countdown} seconds remaining)`;
    countdown--;

    if (countdown < 0) {
      clearInterval(interval);
      showRandomUsernamePassword();
    }
  }, 1000);
}

// Call unlockPage when necessary
document.getElementById("unlock-button").addEventListener("click", unlockPage);
