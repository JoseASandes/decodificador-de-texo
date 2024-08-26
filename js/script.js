const inputTexto = document.getElementById("inputTexto");
const botaoCriptografar = document.getElementById("botaoCriptografar");
const botaoDescriptografar = document.getElementById("botaoDescriptografar");
const botaoCopiar = document.getElementById("botaoCopiar");
const mensagemFinal = document.getElementById("mensagemFinal");
const imagemPersonagem = document.getElementById("imagemPersonagem");
const informacaoDireita = document.getElementById("informacaoDireita");
const apresentacaoDireita = document.getElementById("apresentacaoDireita");

let trocar = [ ["e", "enter"], ["o", "ober"], ["a", "ai"], ["u", "ufat"], ];

const substituir = (novoValor) => {
    mensagemFinal.innerHTML = novoValor;
    imagemPersonagem.classList.add("oculto");
    imagemPersonagem.style.display = "none";
    inputTexto.value = "";
    informacaoDireita.style.display = "none";
    botaoCopiar.style.display = "block";
    apresentacaoDireita.classList.add("apresentacao__direita__ajustar");
    mensagemFinal.classList.add("mensagem__final__ajustar");   
}

const reset = () => {
    mensagemFinal.innerHTML = "";
    imagemPersonagem.classList.remove("oculto");
    informacaoDireita.style.display = "block";
    botaoCopiar.style.display = "none";
    apresentacaoDireita.classList.remove("apresentacao__direita__ajustar");
    mensagemFinal.classList.remove("mensagem__final__ajustar");
    inputTexto.focus();
}

botaoCriptografar.addEventListener("click", () =>{
    const texto = inputTexto.value.toLowerCase();
    if(texto != ""){
        function criptografar(novoTexto){
            for (let i = 0; i < trocar.length; i++){
                if (novoTexto.includes(trocar[i][0])){
                    novoTexto = novoTexto.replaceAll(trocar[i][0], trocar[i][1]);
                };
            };
            return novoTexto;
        };
    } else{
        alert("Insira um texto para criptografar.");
        reset();
    }
    substituir(criptografar(texto));
})

botaoDescriptografar.addEventListener("click", () => {
    const texto = inputTexto.value.toLowerCase();
    if (texto != ""){
        function descriptografar(novoTexto){
            for (let i = 0; i < trocar.length; i++){
                if (novoTexto.includes(trocar[i][1])){
                    novoTexto = novoTexto.replaceAll(trocar[i][1], trocar[i][0]);
                };
            };
            return novoTexto;
        };
    } else{
        alert("Insira um texto para descriptografar.");
        reset();
    }
    substituir(descriptografar(texto));
});

botaoCopiar.addEventListener("click", () => {
    let texto = mensagemFinal;
    // navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado.");
    reset();
});