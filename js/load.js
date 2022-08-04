let players = document.querySelectorAll(".right,.left,.coaches__coach");

function displayPlayers(entries, observer) {
    entries.forEach((entry) => {
        elm = entry.target;
        if (entry.isIntersecting) {
            elm.classList.add("active");
        } else {
            elm.classList.remove("active");
        }
    });
}

let displayObserver = new IntersectionObserver(displayPlayers);

players.forEach((player) => {
    displayObserver.observe(player);
});
