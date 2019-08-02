//function abrirAlert(nome){
  //  alert(nome);
//}

//function receberNome(callbacckNome){
    //let nome = "natyele"
  //  callbacckNome(nome);
//}

//receberNome(abrirAlert);

let lista = document.querySelector("ul");
let corpo = document.querySelector("body");


let listas = [
    {nome:"Natyele"},
    {nome:"Douglas"},
    {nome:"Karen"}
];

let imprimirLista = (cor) =>{
    for(let pessoas of listas){
        lista.innerHTML += `<li>${pessoas.nome}</li>`
    }
  corpo.style.backgroundColor = cor ;
}

let adicionarNome = (callback) =>{
    setTimeout(() =>{
     listas.push({nome:"nati2"});
     callback("red");
    }, 1500);
};

adicionarNome(imprimirLista);   