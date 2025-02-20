const display= document.getElementById('display');
const buttons= document.querySelectorAll('button');
let currentInput='';
let firstOperand=null;
let operator='';
let resetDisplay=false;
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const value=button.dataset.value;
        if(value){
            handleInput(value);
        }else if(button.id==='clear'){
            clearCalculator();
        }else if(button.id==='equals'){
            calculateResult();
        }
    });
});

function handleInput(value)
{
    if(resetDisplay){
        currentInput='';
        resetDisplay=false;
    }
    if(!isNaN(value)||value==='.'){
        // for appending the number or decimal point value
        currentInput+=value;
        updateDisplay(currentInput);
    }else{
        // operator selected
        if(firstOperand===null){
            firstOperand=parseFloat(currentInput);
            operator=value;
            resetDisplay=true;
        }else if(operator){
            firstOperand=calculate(firstOperand,operator,parseFloatloat(currentInput));
            operator=value;
            updateDisplay(firstOperand);
            resetDisplay=true;
        }
    }
}
function calculateResult(){
    if(firstOperand!==null&&operator&&currentInput!==''){
        const result=calculate(firstOperand,operator,parseFloat(currentInput));
        updateDisplay(result);
        clearCalculator(false); // to reset while keeping result on screen
        firstOperand=result; //to allow chaining
    }
}
function clearCalculator(resetDisplay=true){
    currentInput='';
    firstOperand=null;
    operator='';
    if(resetDisplay) updateDisplay('0');
}
function calculate(a,oper,b)
{
    switch(oper)
    {
        case '+':return a+b;
        case '-':return a-b;
        case '*':return a*b;
        case '/':return b!==0?a/b:'error';
        default:return 0;
    }
}
function updateDisplay(value){
    display.textContent=value;
}