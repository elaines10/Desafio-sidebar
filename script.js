let sidebar = document.getElementById("sidebar")
function abrir() {
    if (sidebar.className == "aberto") {
        sidebar.className = "fechado"
    } else {
        sidebar.className = "aberto"
    }
}