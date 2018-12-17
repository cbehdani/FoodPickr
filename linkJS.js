window.onload = () => {
    document.addEventListener("click", function (e) {
        if (e.target.id == "goToLocation") {
            location.href = "/locationsNearYou.html";
        }
        else if (e.target.id == "rightArrow"){
            location.href = "/index.html";
        }
        else if (e.target.id == "goToFavorites"){
            location.href = "/favorites.html";
        }
    });
}
