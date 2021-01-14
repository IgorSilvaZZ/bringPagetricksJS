
const contentText = document.querySelector(".content");

//Criando a Barrinha
let bar = document.createElement("div");

//Estilo Barrinha
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#8e44ad";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = '0.2s';

//Adicionando na pagina
document.body.append(bar);

//Atualizar a Barrinha
const updateBar = () =>{

    //O tamanho da caixa que contem o texto
    const textHeight = contentText.offsetHeight;

    //Verificar a posicao da pagina estou
    const pagePositionY = window.pageYOffset;

    //Regra de tres
    // Valor Variavel multiplacado pelo valor fixo para saber qual porcentagem da pagina eu estou já que 100% é o conteudo da pagina inteiro

    /* const updatedBar = (pagePositionY * 100 / textHeight); */

    /* Coloquei 135 pois ele sempre ficava menor mesmo eu chegando no final da pagina */
    const updatedBar = (pagePositionY * 135 / textHeight);

    bar.style.width = updatedBar + "%";

}

//Verificar movimento de scroll
window.addEventListener("load", () =>{
    document.addEventListener("scroll", updateBar);
})
