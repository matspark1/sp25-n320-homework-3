const submitBtn = document.querySelector(".submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    alert("Your message has been sent! We'll get back to you shortly.");
  });
}

const bg = document.querySelector(".bg");
const body = document.body;

if (bg) {
  bg.addEventListener("click", () => {
    console.log("He213");
    body.classList.toggle("primary");
  });
}
