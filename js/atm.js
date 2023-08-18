
const yourName= prompt(`What is your name?`) || 'Siri'
alert(`Hello ${yourName}. Welcome to UBA`)

const PIN = prompt('Please Enter PIN')
let balance = 10000

if(PIN.length !== 4){
    alert(`Invalid pin`)
}else{
    const selectOption = prompt(`Please Select an option
    1.Withdrawal
    2.Transfer
    `)
    if(selectOption === '1'){
        const enterAmt= prompt('Enter Amount')
                if (Number((enterAmt)) <= 0 || !enterAmt){
                    alert('Invalid Amount. Amount must be greater than zero')
                }else if (enterAmt > balance){
                    alert('Insufficient fund.')
        
                }else if(enterAmt <= balance){
                    balance = balance - enterAmt
                    alert(`You have successfully withdrawn ${enterAmt} and your balance is ${balance}`)
                }

    }else if(selectOption === '2'){
        const selectBank= prompt(`Please Select a Bank
        1. ZENITH BANK
        2.GTB BANK
        3.FIRST BANK
        4.STERLING BANK
        5.ECO BANK
        `)

        if(!selectBank){
            alert(`Invalid Request. Please select a bank from the list of options`)
        }else{

            const enterAmt= prompt('Enter Amount')
            if (Number((enterAmt)) <= 0 || !enterAmt){
                alert('Invalid Amount. Amount must be greater than zero')
            }else if (enterAmt > balance){
                alert('Insufficient fund.')
    
            }else if(enterAmt <= balance){
                balance = balance - enterAmt
                alert(`You have successfully withdrawn ${enterAmt} and your balance is ${balance}`)
            }

        }

    }else{
        alert('Invalid option. Select a valid option from the list provided.')

    }
}










