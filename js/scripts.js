var nome = document.getElementById("txtnome");
var sobrenome = document.getElementById("txtsobrenome");
var idade = document.getElementById("txtidade");
var email = document.getElementById("txtemail");
var senha = document.getElementById("txtsenha");
var btn = document.getElementById("btnCadastrar");
var bta = document.getElementById("btnAtualizar");

btn.onclick = function(){
    fetch("http://localhost:5050/registrar",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json",
        },
        body:JSON.stringify({
            nomecliente: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            email: email.value,
            senha: senha.value,
        }),
    })
    .then((response)=> response.json())
    .then((rs)=>{
        alert("Cadastro Realizado");
        // vamos att e pag e limpar os dados
        window.location.reload();
    })
    .catch((erro)=> console.error(`Erro ao tentar cadastrar ${erro}`));
};
function listarClientes(){
    var tabela = document.getElementById("tabela");
    fetch("http://localhost:5050")
    .then((response)=> response,json())
    .then ((rs)=>{
        for (var i = 0; i <rs.saida.lenght; i++){
            tabela.innerHTML+=
            "<tr>"+"<td>"+ rs.saida[i]._id + "</td>"+ "<td>"+ rs.saida[i].nomecliente +
            "</td>" + "<td>" +rs.saida[i].sobrenome + "</td>"+"<td>"+ rs.saida[i].idade + "</td>"+ "<td>"+ rs.saida[i].email+ "</td>"+ "<td>"+ rs.saida[i].senha+ "</td>"+ "<td>"+rs.saida[i].datacadastro+
        }
    })
}