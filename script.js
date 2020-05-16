var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0; i< buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        console.log(value);
        if(value=='+'){
           operator='+';
           operand1 = parseFloat(display.textContent);
           display.innerText = '';
        }else if(value=='-'){
            operator='-';
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
         }else if(value=='*'){
            operator='*';
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
         }else if(value=='/'){
            operator='/';
            operand1 = parseFloat(display.textContent);
            display.innerText = '';
         }else if(value=='AC'){
            operator=null;
            operand1 = null;
            operand2 = null;
            display.innerText = '';
         }else if(value == '='){
           operand2 = parseFloat(display.textContent);
           if(operator=='/' && operand2=='0'){
               display.innerText = "Error - Press AC";
               operator = '';
               operand1 = '';
               operand2 = '';
           }else
           display.innerText = eval(operand1+operator+operand2);
        }else{
            display.innerText += value;
        }
    })
}