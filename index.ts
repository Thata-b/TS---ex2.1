// Import stylesheets
import './style.css';

//Comentando com múltiplas linhas
/* Várias linhas 
de comentário */

//Declaração de constantes 
const myVar1: number = 42;
const myVar2: number = 42;

//Declaração de variaveis 
let myVar3 = 42;
let myVar4: number = 42;
let myVar5: string = 'Olá';

let mySentence: string = `Blá 

blá 

blá 

blá

blá

`;


//Utilizando console
console.log('Olá, mundo!');

//Declarando arrays
let list: number[] = [21,2,65,55,98,3,9,80,42]; 

//Utilizando laços de repetição
console.log("Laço");
for(let i=0; i<10; i++){
  console.log(list[i]);
}


//Utilizando condicionais
if(myVar1 % 2 == 0){
  console.log(myVar1+" é PAR");
}else{
  console.log(myVar1+" é IMPAR");
}

//Utilizando laços e condicionais
for(let i=1; i<=10; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

//Declarando tipos enumerados
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

enum ColorWithReferences {Red = 1, Green = 2, Blue = 3};
let c2: ColorWithReferences = ColorWithReferences.Green;

//Declarando any
let notSure: any = 42;
notSure = "Maybe a string instead";
notSure = false; ///definitivamente, é booleano

//Declarando void
function aviso(): void {
  console.log("Mensagem de alerta!");
}
aviso();

//Declarando funções
function soma(n1: number, n2: number): number{
  return n1+n2;
}
console.log(soma(21,21));
console.log(soma(1,2));

function getFullName(pessoa: {name: string, lastName: string}): string{
  return pessoa.name + " " + pessoa.lastName;
}
let p = {name: "Ricardo", lastName: "Larguesa"};
console.log(getFullName(p));

//Declarando uma função para ser invocada por um eventSourceInitDict
function AlertaTsMethod(this: HTMLElement, ev: Event){
  alert("Alertando usando TS");
}

//Implementando um contador
let counter = 0;
let intervalId = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: '+counter;
}, 1000);

let title: string = "Olá, mundo!";
let paragraph: string = "Blábláblá";





// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</p>
<div id='counterDiv'></div>
<button id='appButton' onclick="">AlertarMethod</button>

`;