//5---------------------------------------------------------------------------------------------
var pra = 9;
var teo = 17;
function note(pratica, teorica) {
    var nota = (pratica + teorica) / 2;
    var a = "";
    if (nota >= 10) {
        a = "aprovado";
    }
    else {
        a = "reprovado";
    }
    console.log(nota)
    return a;
}
console.log(note(pra, teo));

//6---------------------------------------------------------------------------------------------
var numeroo = 8;
function mes(m) {
    if (m == 1) {
        m = "Janeiro";
    } else if (m == 2) {
        m = "Fevreiro";
    } else if (m == 3) {
        m = "Março";
    } else if (m == 4) {
        m = "Abril";
    } else if (m == 5) {
        m = "Maio";
    } else if (m == 6) {
        m = "Junho";
    } else if (m == 7) {
        m = "Julho";
    } else if (m == 8) {
        m = "Agosto";
    } else if (m == 9) {
        m = "Setembro";
    } else if (m == 10) {
        m = "Outubro";
    } else if (m == 11) {
        m = "Novembro";
    } else {
        m = "Decembro";
    };
    return m;
}
console.log(mes(numeroo));

//7---------------------------------------------------------------------------------------------
var primer_valor = 3;
var segundo_valor = 2;
var simbolo = "^"; // + - * / ^
function conta(primer_valor,segundo_valor,simbolo) {
    var res=1;
    if (simbolo=="+"){
        res=primer_valor+segundo_valor;
    }
    else if ((simbolo=="-")){
        res=primer_valor-segundo_valor;
    }
    else if ((simbolo=="*")){
        res=primer_valor*segundo_valor;
    }
    else if ((simbolo=="/")){
        res=primer_valor/segundo_valor;
    }
    else if ((simbolo=="^")){
        res=Math.pow(primer_valor,segundo_valor);
        //res = primer_valor ** segundo_valor (outra forma de fazer x^y)
    }
    return res;
}
console.log(conta(primer_valor,segundo_valor,simbolo));
//8---------------------------------------------------------------------------------------------
function mul() {
    var list = [];
    var res = 0;
    for (var i = 1; res < 20; i++) {
        res = 5 * i;
        list[i - 1] = res;
        res = 5 * (i + 1);
    }
    return list;
}
console.log(mul());

//9---------------------------------------------------------------------------------------------
function soma() {
    var res = 0;
    for (var i = 1; i <= 100; i++) {
        res += i;
    }
    return res;
}
console.log(soma());

//10---------------------------------------------------------------------------------------------
var numero = 5;
function factorial(numero) {
    var res = 1;
    for (var i = numero; i >= 1; i--) {
        res *= i;
    }
    return res;
}
console.log("o factorial de", numero, "é", factorial(numero));

//11---------------------------------------------------------------------------------------------
var numeros = [5, 9, 6, 4, 1, 32, 5, 2];
function big(numeros) {
    maior = numeros[0];
    for (var i = 0; i < numeros.length; i++) {
        if (maior < numeros[i]) {
            maior = numeros[i];
        }
    }
    return maior;
}
function small(numeros) {
    menor = numeros[0];
    for (var i = 0; i < numeros.length; i++) {
        if (menor > numeros[i]) {
            menor = numeros[i];
        }
    }
    return menor;
}
console.log("O maior numero é:", big(numeros));
console.log("O menor numero é:", small(numeros));
console.log("há", numeros.length, "numeros na lista");