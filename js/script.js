function validar(){    //função: bloco de comandos

var usuario = document.getElementById("usuario").value; 
// armazena o que foi  digitado no campo usuário

var senha = document.getElementById("senha").value;
// armazena o que foi  digitado no campo senha


if(usuario == "pave" && senha == "chocolate"){
    // autenticar Bem-vindo
    alert("Acesso Liberado");
    window.location.href = "https://www.sp.senac.br/"; // destino quando logado
} else{
    //acesso negado / barrado
    alert("Acesso Negado!! Tente novamente!!"); //mensagem na tela 
    window.location.href = "index.html";
}


}




