const container = document.querySelector(".produto-container");

function scrollleft() {
    container.scrollBy({ left: -200, behavior: "smooth" });
}

function scrollRight() {
    container.scrollBy({ left: 200, behavior: "smooth" });
}