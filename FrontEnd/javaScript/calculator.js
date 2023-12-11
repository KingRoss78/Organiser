//calculator
class Calculator { //using a class/contructor means that object is initialised and can be declared with all relevant functions/vars later using the n'new' keyword
    constructor(previousOperandTextElement, currentOperandTextElement) { //constructor takes all inputs for calc as well as functions to use
        this.previousOperandTextElement = previousOperandTextElement //without the this., contructor will not use variable properly
        this.currentOperandTextElement = currentOperandTextElement
        this.clear(); //each time a calculator class instance is created, we want to clear all inputs
    //gives us a way to set these text elements inside of calcualtor class
    }

    clear() { //this will clear out the different vars in calculator
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined //empty strings and undefined means that calculator will revert to default of having undefined/no value
    }
    
    delete() { //this will remove single number
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    
    appendNumber(number) { //this function will occur each time user clicks on number to add to screen
        if (number === '.' && this.currentOperand.includes('.')) return //this ensures that . is only inputted once. If current operan includes . the function returns and stops
        this.currentOperand = this.currentOperand.toString() + number.toString() //js will try to add these as actual numbers e.g. 1+1 = 2, rather than 1+ 1 is 11. Converting it to string ensures that these numbers work as expected
    }
    
    chooseOperation(operation) { //this will trigger once an operation is clicked. 
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() { //take values inside calulcator and returns the single value
        let computation;
        const previousVariable = parseFloat(this.previousOperand);
        const currentVariable = parseFloat(this.currentOperand);
        if (isNaN(previousVariable) || isNaN(currentVariable)) return
        switch (this.operation) {
            case '+': 
                computation = previousVariable + currentVariable
                break;
            case '-': 
                computation = previousVariable - currentVariable
                break;
            case '*': 
                computation = previousVariable * currentVariable
                break;
            case '÷': 
                computation = previousVariable / currentVariable
                break;
             /*case 'LTA Calculate':
                computation = currentVariable / 1073100;
                this.updateDisplay(); 
                break; */
            default:
                return;
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        }   else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        }   else {
            return integerDisplay
        }
    }
    updateDisplay() { //this will update the values inside the output bar in html
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }   else {
        this.previousOperandTextElement.innerText = ''
    }

}}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-ac]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) //each time you want to declare a new instance of class, you pre-curse it with 'new' keyword

numberButtons.forEach(button => { //using a loop to cycle through each button and identify which one is cliked
    button.addEventListener('click', () => { //setting this means that function will trigger on click for identified button
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

