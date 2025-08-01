"use strict"

const equals = document.querySelector('#equals')
const firstVar = document.querySelector('#firstVar')
const secondVar = document.querySelector('#secondVar')
const total = document.querySelector('#total')

function push() {
    const operator = document.querySelector('input[name="operation"]:checked')
    if(operator) {            
        switch (operator.value) {
            case '+':
                total.value = Number(firstVar.value) + Number(secondVar.value)
                break;
            case '-':
                total.value = Number(firstVar.value) - Number(secondVar.value)
                break;
            case '*':
                total.value = Number(firstVar.value) * Number(secondVar.value)
                break;
            case '/':
                total.value = Number(firstVar.value) / Number(secondVar.value)
                break;    
            default:
                break;
        }
    } else {
        console.log('You did not take any opearation')
        return
    }
}
equals.addEventListener('click', push)


