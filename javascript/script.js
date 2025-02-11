let progress = 0;

// Daftar tautan unduhan
const downloadLinks = [
  "https://www.mediafire.com/file/5u235ojk95t951s/_ViVienDo_Free_18529680.apk/file"
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
  progressText.style.opacity = 0;
  setTimeout(() => {
    progressText.style.opacity = 1;
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
      window.open("https://youtu.be/TsQn9eZVrtE", "_blank");
      updateProgress();
      break;
  }
}

// Function to display download link randomly
function showRandomDownloadLink() {
  const randomIndex = Math.floor(Math.random() * downloadLinks.length);
  const selectedLink = downloadLinks[randomIndex];
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popupContent.innerHTML = `Download Link: <a href="${selectedLink}" target="_blank">Click here</a>`;
  popup.style.display = "flex";
}

// Unlock page and display random download link
function unlockPage() {
  const popup = document.getElementById("popup");
  const popupContent = document.querySelector(".popup-content");
  popupContent.textContent = "Preparing your download link, please wait!";
  popup.style.display = "flex";

  let countdown = 10;
  const interval = setInterval(() => {
    popupContent.textContent = `Your download link is being processed, please wait! (${countdown} seconds remaining)`;
    countdown--;

    if (countdown < 0) {
      clearInterval(interval);
      showRandomDownloadLink();
    }
  }, 1000);
}

// Call unlockPage when necessary
document.getElementById("unlock-button").addEventListener("click", unlockPage);
