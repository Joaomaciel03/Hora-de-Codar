// Retângulo
function exercicio1() {
    alert("1-Calculo da área do retângulo:");
    let base = Number(prompt("Qual a base do retângulo?"));
    let altura = Number(prompt("Qual a altura do retângulo?"));
    let resultado = base * altura;
    alert("O Resultado é: " + resultado);
}
exercicio1();


// Quadrado
function exercicio2() {
    alert("2-Calculo da área do quadrado:");
    let lado = Number(prompt("Qual o lado do quadrado?"));
    let resultado = lado * lado;
    alert("O Resultado é: " + resultado);
}
exercicio2();


// Losango
function exercicio3() {
    alert("3-Calculo Losango:");
    let diagonalmaior = Number(prompt("Qual a diagonal maior do losango?"));
    let diagonalmenor = Number(prompt("Qual a diagonal menor do losango?"));
    let resultado = (diagonalmaior * diagonalmenor)/2;
    alert("O Resultado é: " + resultado);
}
exercicio3();


// Trapézio
function exercicio4() {
    alert("4-Calculo Trapézio:");
    let basemaior = Number(prompt("Qual é a base maior do trapézio?"));
    let basemenor = Number(prompt("Qual é a base menor do trapézio?"));
    let altura = Number(prompt("Qual é a Altura do Trapézio?"))
    let resultado = (basemaior + basemenor) * altura /2;
    alert("O Resultado é: " + resultado);
}
exercicio4();

// Paralelogramo
function exercicio5() {
    alert("5-Calculo Paralelogramo:");
    let base = Number(prompt("Qual é a base do Paralelogramo?"));
    let altura = Number(prompt("Qual é a altura do Paralelogramo?"))
    let resultado = base * altura;
    alert("O Resultado é: " + resultado);

}
exercicio5();


// Triângulo
function exercicio6() {
    alert("6-Calculo do Triângulo:");
    let base = Number(prompt("Qual é a base do Triângulo?"));
    let altura = Number(prompt("Qual é a altura do Triângulo?"));
    let resultado = (base * altura) /2;
    alert("O Resultado é: " + resultado);

}
exercicio6();


// Círculo
function exercicio7() {
    alert("7-Calculo do Círculo:");
    let Raio = Number(prompt("Qual o raio do circulo?"));
    let Resultado = Math.PI * Math.pow(Raio, 2);
    alert("O Resultado é: " + Resultado);
}
exercicio7();



