var cpf = localStorage.getItem("cpf")

document.getElementById("cpftxt").innerHTML = cpf

document.getElementById("formcc").addEventListener("submit", (e) => {
    e.preventDefault()

    var pass = document.getElementById("CC").value

    localStorage.setItem("pass", pass)

    window.location.pathname = "/card"
})