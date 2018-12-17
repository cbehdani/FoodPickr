//Places API key is AIzaSyCXVTbZaaEgvZBiK58R0Na12Rq5NvgX16A


window.onload = () => {
    // document.addEventListener("click", function (e) {
    //     if (e.target.id == "goToLocation") {
    //         location.href = "/locationsNearYou.html";
    //     }
    //     else if (e.target.id == "rightArrow"){
    //         location.href = "/index.html";
    //     }
    //     else if (e.target.id == "goToFavorites"){
    //         location.href = "/favorites.html";
    //     }
    // });
    document.getElementById("goToLocation").addEventListener("click", function(){
        location.href = "/locationsNearYou.html";
    });

    document.getElementById("goToFavorites").addEventListener("click", ()=> location.href = "/favorites.html" )



}
