$(document).ready(function() {
    let num1 = '';
    let num2 = '';
    let displayed = '';
    let operator = '';
    let total = '';

    $('.button').on('click', function(e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            ifNumber(btn);
        } else {
            ifOperator(btn);
        }
    });

    function ifNumber(num) {
        let to_display = 0;
        if (displayed === '') {
        
            to_display = num;
        } else {
            to_display = displayed + num;
        }
        displayed = to_display;
        displayButton(to_display);
    }
    
    function ifOperator(oper) {
        if (oper === 'C') {
            displayButton('0');
            displayed = '';
        } 
        else if (oper === '=') {
            num2 = displayed;
            calculate();
            displayButton(total);
            arr = [];
        }
        else {
            operator = oper;
            num1= displayed;
            displayed = '';
            displayButton(displayed);
            console.log(arr[0]);
        }
    }
    
    function calculate() {
        switch (operator) {
            case '+':
                total = +num1 + +num2;
                break;
            case '-':
                total = +num1 - +num2;
                break;
            case '/':
                total = +num1 / +num2;
                break;
            case 'x':
                total = +num1 * +num2;
                break;
        }
        update();
    }
    
    function displayButton(btn) {
        $('.calc-result-input').text(btn);
    }
    
    function update() {
        displayed = total;
        num2 = '';
    }


});