const divs = document.querySelectorAll(".flex-item");
const showAlert = () => {
    alert("Hello world!");
};
window.onload = showAlert;
divs.forEach(el => {
    el.addEventListener("click", showAlert);
});
