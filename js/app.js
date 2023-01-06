const botones = document.querySelectorAll('.button');
const resultado = document.getElementById('resultado');

let calculation = [];
let accumulativeCalculation;

function calculate(button){
    const value = button.textContent
    if(value === 'RESET'){
        calculation = []
        resultado.textContent = ''
    } else if (value === '='){
        resultado.textContent = eval(accumulativeCalculation);
    }else if(value === 'DEL'){
        calculation = calculation.slice(0, -1);
        accumulativeCalculation = calculation.join('')
        resultado.textContent = accumulativeCalculation
    }else{
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        resultado.textContent = accumulativeCalculation
    }

   
}

botones.forEach(button => button.addEventListener('click', () => calculate(button)));