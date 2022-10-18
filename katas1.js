
/*Exercício 1

function cubicSquare() {
    let res = ""
    for (numero = 1; numero <= 10; numero++) {
        res += (numero ** 3) + ' ';
    }
    return res
} 
console.log(cubicSquare())
*/


/*Exercício 2

function divisiblesFor(l, d) {
    let res = ""
    for (let i = 1; i <= l; i++) {
        if (i % d == 0) {
            res += i + ' ';
        }
    }
    return res
}
console.log(divisiblesFor(100, 10));
*/

/*Exercício 3

function stringElement(palavra, posicao) {
    for (let i = 0; i < palavra.length; i++) {
        if (i == posicao) {
            return palavra[i-1].toUpperCase()
        }
    }
}
console.log(stringElement("Roberto", 3));

*/

/*Exercício 4

function stringSlicer(palavra, numero){
    let res = ""
    if (numero < 0){
        return "Números positivos apenas."
    }
    for (i = 0; i <= numero -1; i++) {
        res += palavra[i];
    }
    return res
}
console.log(stringSlicer("ALGORÍTMOS", 4))

*/

/*Exercício 5

function stringSlicer(palavra, numero) {
    let res = ""
    for (i = numero; i < palavra.length; i++) {
        res += palavra[i];
    }
    return res
}
console.log(stringSlicer("ALGORÍTMOS", 2))

*/

/*Exercício 6

function countVowels (palavra){
    let vogais = ["a", "e", "i", "o", "u"]
    let count = 0
    for (i = 0; i < palavra.length; i++) {
        if(vogais.includes(palavra[i].toLowerCase())){
            count++
        }
    }
    return count
}
console.log(countVowels("abacaxi"))
*/

/*Exercício 7

function countTextOccurrences (palavra, letra){
    let count = 0
    for (i = 0; i < palavra.length; i++) {
        if(palavra[i].toLowerCase() == letra.toLowerCase()){
            count++
        }
    }
    return count
}
console.log(countTextOccurrences("Abacaxi", "a"))
*/

/*Exercício 8

function textBackwards(palavra) {
    let res = ""
    for (i = palavra.length -1; i >= 0; i--) {
        res += palavra[i]
    }
    return res
}
console.log(textBackwards("abacaxi"))
*/

/*Exercício 9

function removeBlank(palavra) {
    let res = ""
    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] != " ") {
            res += palavra[i]
        }
    }
    return res
}
console.log(removeBlank("Não ficará   espaços em branco"))
*/

/*Exercício 10


function encryptText(frase) {
    let res = ""

    for (i = 0; i < frase.length; i++) {
        if (frase[i].toUpperCase() == "A") {
            char = "X"
        } else if (frase[i].toUpperCase() == "E") {
            char = "Y"
        } else if (frase[i].toUpperCase() == "I") {
            char = "W"
        } else if (frase[i].toUpperCase() == "O") {
            char = "K"
        } else if (frase[i].toUpperCase() == "U") {
            char = "Z"
        } else {
            char = frase[i]
        }

        if (frase[i] == frase[i].toLowerCase()) {
            char = char.toLowerCase()
        }
        res += char

    }
    return res
}
console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada"))

*/