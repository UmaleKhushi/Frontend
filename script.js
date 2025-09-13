
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach((item, index) => {
    item.style.animation = `fadeIn 1s ease forwards`;
    item.style.animationDelay = `${4 + index * 0.5}s`; // after hero text
  });
});

const fileInput = document.getElementById("fileInput");
const fileNameEl = document.getElementById("fileName");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const uploadMessage = document.getElementById("uploadMessage");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

 
  fileNameEl.textContent = file.name;
  progressContainer.style.display = "block";
  progressBar.style.width = "0%";
  uploadMessage.style.opacity = 0; 

  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      
      progressBar.style.background = "linear-gradient(90deg, limegreen, green)";

      
      setTimeout(() => {
        uploadMessage.textContent = "Image Uploaded Successfully!";
        uploadMessage.style.opacity = 1;
      }, 400);
    }
  }, 200); 
});
