const selectOption = prompt(`Please Select an option
1.Airtime-self
2.Airtime-others
3.Transfer-UBA
4.Transfer-Other Banks
5.Transfer-Microfinance & Others
6.Transfer-UBA Prepaid
7.Check Balance
8.Next
`)

// console.log(typeof selectOption)

if(selectOption === '1'){
    const enterPin = prompt('Please enter your PIN')
    // console.log(enterPin.length)
    if (enterPin.length !== 4){
        alert('Invalid pin. Please enter a valid pin')
    }else{

        const enterAmt= prompt('Enter Amount')
        if (enterAmt <= 0){
            alert('Invalid Amount. Please enter a valid Amount')
        }else{
            alert('Successful')
        }
    }   
    
}else if(selectOption === '2'){
   
    const enterPin = prompt('Please enter your PIN')

    if (enterPin.length !== 4){
        alert('Invalid pin. Please enter a valid pin')
    }else{

        let enterNumber= prompt('Please your phone number')
        

        if(enterNumber.length !==11){
            alert('Invalid phone number. Please enter a valid phone number')
        }else{
            const enterAmt= prompt('Enter Amount')
        if (enterAmt <= 0){
            alert('Invalid Amount. Please enter a valid Amount')
        }else{
            alert('Successful')
        }
        }

        
    }   

}else if(selectOption === '3'){

    const enterPin = prompt('Please enter your PIN')

    if (enterPin.length !== 4){
        alert('Invalid pin. Please enter a valid pin')
    }else{

        const acctNum= Number(prompt('Please enter your account number'))
        console.log(acctNum.length)

        if(acctNum.length !== 10 || acctNum.length > 10){
            alert('Invalid account number. Please enter a valid account number')
        }else{

            const entAmt= Number(prompt('Please enter an amount'))
            if(!entAmt || entAmt <=0){
                alert('Invalid amount.Please enter a valid amount')
            }else{
                alert('Successful')
            }
        }

      
        }

}