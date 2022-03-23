console.log("//1-------------------------------------------------------------------------------------------------------")//1-------------------------------------------------------------------------------------------------------
var peso = 70;
var altura = 1.81;
function imc (peso, altura){
    var indmc = peso / (altura*altura);
    if (indmc < 18.5) {
        console.log ("Abaixo do peso");
    }
    else if (indmc < 25) {
        console.log ("Peso normal");
    }
    else if (indmc < 30) {
        console.log ("Acima do peso");
    }
    else if (indmc > 30) {
        console.log ("Obeso");
    }
    return indmc;
}
console.log (imc(peso,altura));


console.log("//2-------------------------------------------------------------------------------------------------------")//2-------------------------------------------------------------------------------------------------------
var frase = "Hoje e Domingo";
function invertir (frase) {
    var sp = frase.split(" ");
    var reverse ="";
    for (var i = 0; i < sp.length; i++){
        var word = sp[i];
        for (var j = word.length -1; j >= 0 ; j--){
            var letra = word[j];
            reverse += letra;
        }
        reverse+=" ";
    }
    return reverse;
}
console.log(invertir(frase));


console.log("//3-------------------------------------------------------------------------------------------------------")//3-------------------------------------------------------------------------------------------------------
var frasefrase = "número de vogais que a mesma contém";
function vogal (frasefrase) {
    var lista = frasefrase.split(" ");
    var cont = 0
    for (var i = 0; i < lista.length; i++){
        var palavra = lista[i];
        for (var j = palavra.length -1; j >= 0 ; j--){
            var letter = palavra[j];
            if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u"||letter=="á"||letter=="é"||letter=="í"||letter=="ó"||letter=="ú"||letter=="à"||letter=="è"||letter=="ì"||letter=="ì"||letter=="ù"||letter=="ã"||letter=="õ"||letter=="â"||letter=="ê"||letter=="î"||letter=="ô"||letter=="û"){
                cont++
            }
        }
    }
    return cont;
}
console.log(vogal(frasefrase));

console.log("//4-------------------------------------------------------------------------------------------------------")//4-------------------------------------------------------------------------------------------------------
var frases = "numero de vogais que a mesma contem";
var acci = "e"
function conta (frases,acci) {
    frases=frases.toLowerCase()
    var lst = frases.split(" ");
    var contador = 0
    for (var i = 0; i < lst.length; i++){
        var plv = lst[i];
        for (var j = plv.length -1; j >= 0 ; j--){
            var letramc = plv[j];
            if (letramc==acci){
                contador++
            }
        }
    }
    return contador;
}
console.log("a letra: '",acci,"' aparece", conta(frases,acci),"vezes");

console.log("//5-------------------------------------------------------------------------------------------------------")//5-------------------------------------------------------------------------------------------------------
var entrada = "09:30:00";
var saida = "17:00:00";
function horas (entrada,saida) {
    var seg;
    var min;
    var hor;
    var res;
    var hrsentrada = entrada.split(":");
    var hrssaida = saida.split(":");
    hor=hrssaida[0]-hrsentrada[0];
    min=hrssaida[1]-hrsentrada[1];
    seg=hrssaida[2]-hrsentrada[2];
    if (seg<0){
        seg+=60;
        min-=1;
    }
    else if (min<0){
        min+=60;
        hor-=1;
    }
    res=String(hor)+":"+String(min)+":"+String(seg);
    return res;
}
console.log(horas(entrada,saida));

console.log("//6-------------------------------------------------------------------------------------------------------")//6-------------------------------------------------------------------------------------------------------
var altura = 5;
var largura = 10;
function cuadrado(altura,largura){
    var print = "";
    for (var i = 0 ; i<largura ; i++){
        print+="*"
    }
    console.log("Retangulo com: ");
    console.log("Altura: ", altura);
    console.log("Largura: ", largura);
    for (var j = 0 ; j<altura-1 ; j++){
        console.log(print);
    }
    return print
}
console.log(cuadrado(altura,largura));

console.log("//7-------------------------------------------------------------------------------------------------------")//7-------------------------------------------------------------------------------------------------------
var triangulo = 3;
function triangle(triangulo){
    var ast = "";
    for (var a = 1 ; a<triangulo ; a++){
        ast+="*";
        console.log(ast);
    }
    ast+="*";
    return ast
}
console.log(triangle(triangulo));

console.log("//8-------------------------------------------------------------------------------------------------------")//8-------------------------------------------------------------------------------------------------------
var lado = 7;
function cuad(lado){
    var eri="**";
    var med="*";
    for (var i = 0 ; i<lado-2; i++){
        eri+="*";
        med+=" ";
    }
    med+="*"
    console.log (eri);
    for (c=0 ; c<lado-2 ; c++){
        console.log (med);
    }
    return eri
}
console.log(cuad(lado));

console.log("//9-------------------------------------------------------------------------------------------------------")//9 -------------------------------------------------------------------------------------------------------
var estudantes = [];
for (let i = 0;i<100;i++){
    var estudante = {
        numero: Math.ceil(Math.random()*1000),
        nota:Math.random()*20
    };
    estudantes.push(estudante);
}

function ss(estudantes,option){
    switch (option) {
        case 1:
            console.log(Listall(estudantes));
            break;
        case 2:
            console.log("nota mais alta: ",Bestgrade(estudantes));
            break;
        case 3:
            console.log("nota mais baixa: ",Worstgrade(estudantes));
            break;
        case 4:
            console.log("a nota mais proxima da media e: ",Media(estudantes));
            break;
        case 5:
            console.log(Negativas(estudantes));
            break;
        case 6:
            console.log(Positivas(estudantes));
            break;
        default:
            console.log("opcao invalida");
            break;
    }
    return ""
}

function Listall(estudantes){
    for (let i = 0; i < estudantes.length; i++) {
        var estudante = estudantes[i];
        console.log("Number: "+ estudante.numero + ", Nota: "+estudante.nota);
    }
    return ""
}

function Bestgrade(estudantes){
    var best = 0;
    for (let i = 0; i < estudantes.length; i++) {
        var estudante = estudantes[i];
        if (estudante.nota>best){
            best=estudante.nota;
        }
    }
    return best
}

function Worstgrade(estudantes){
    var worst = 20;
    for (let i = 0; i < estudantes.length; i++) {
        var estudante = estudantes[i];
        if (estudante.nota<worst){
            worst=estudante.nota;
        }
    }
    return worst
}

function Media(estudantes){
    var soma = 0;
    var media = 0;
    var dif = 20;
    var not = 0;
    for (let i = 0; i < estudantes.length; i++) {
        var estudante = estudantes[i];
        soma+=estudante.nota;
    }
    media=soma/estudantes.length;
    console.log("a nota media e: ",media);
    for (let i = 0; i < estudantes.length; i++) {
        estudante = estudantes[i];
        soma=Math.abs(media-estudante.nota);
        if (soma < dif){
            dif=soma;
            not=estudante.nota;
        }
    }
    return not
}

function Negativas(estudantes){
    console.log("Notas negativas");
    var count = 0;
    for (let i = 0; i < estudantes.length; i++) {
        var estudante = estudantes[i];
        if (estudante.nota<9.5){
            count+=1
        }
    }
    return count
}

function Positivas(estudantes){
    console.log("Notas positivas");
    var count = 0;
    for (let i = 0; i < estudantes.length; i++) {
        var estudante = estudantes[i];
        if (estudante.nota>=9.5){
            count+=1
        }
    }
    return count
}

var option = 1;
console.log(ss(estudantes,option));