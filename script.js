const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

console.log("JS");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("clicked");
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        const tab = button.dataset.tab;
        document.getElementById(tab).classList.add("active");
    });
});