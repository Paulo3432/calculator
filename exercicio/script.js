alert("Seja bem vindos a mais um app básico. Aqui você poderá inserir dois valores e eu irei calcular a soma, subtração, multiplicação, divisão e o resto da divisão.")

let numberOne = prompt("Digite o primeiro número")
let numbertwo = prompt("Digite o segundo número")
const resultSub = Number(numberOne) + Number(numbertwo)
const numberThree = Number(numberOne) - Number(numbertwo)
const numberFour = Number(numberOne) * Number(numbertwo)
const numberFive = Number(numberOne) / Number(numbertwo)
const numberSix = Number(numberOne) % Number(numbertwo)
alert(`O resultado da adição é ${resultSub}`)
alert(`O resultado da subtração é ${numberThree}`)
alert(`O resultado da multiplicação é ${numberFour}`)
alert(`O resultado da divisão é ${numberFive}`)
alert(`O resultado do resto da divisão é ${numberSix}`)

restOfDivision = numberOne / numbertwo

if(restOfDivision == 0) {
    alert(`O número é par ${torestOfDivision}`)
}else{
    alert(`O número é impar ${restOfDivision}`)
}

if(Number(numberOne) == Number(numbertwo)){
    alert(`Os número iseridos são iguais`)
}else{
    alert(`Números diferentes`)
}

