/* udpate active button */
document.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    document.querySelector("nav .active").classList.remove("active");
    e.target.classList.add("active");
  }
});