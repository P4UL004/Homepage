// Recebe o ID da DIV a ser liberada.
function toggleContent(id) {
    var div = document.getElementById(id);

    if (div.style.display === "none") {
        div.style.display = "flex";
    } else {
        div.style.display = "none";
    }
}