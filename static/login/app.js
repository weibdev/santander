document.getElementById("cpfForm").addEventListener("submit", (e) => {
    e.preventDefault()
    var cpf = document.getElementById("CPF").value

    localStorage.setItem("cpf", cpf)

    window.location.pathname = "/login2"
})