
const yourName= prompt(`What is your name?`)
alert(`Hello ${yourName}. Welcome to UBA`)
const selectOption = prompt(`Please Select an option
1.Airtime-self
2.Airtime-others
3.Transfer-UBA
4.Transfer-Other Banks
`)

// console.log(typeof selectOption)

if(selectOption === '1'){
    const enterPin = prompt('Please enter your PIN')
    // console.log(enterPin.length)
    if (enterPin.length !== 4){
        alert('Invalid pin. Pin must be four numbers')
    }else{

        const enterAmt= prompt('Enter Amount')
        if (enterAmt <= 0){
            alert('Invalid Amount. Amount must be greater than zero')
        }else{
            alert(`Successful sent ${enterAmt}`)
        }
    }   
    
}else if(selectOption === '2'){
   
    const enterPin = prompt('Please enter your PIN')

    if (enterPin.length !== 4){
        alert('Invalid pin. Pin must be four numbers')
    }else{

        const enterNumber= prompt('Please your phone number')
        

        if(enterNumber.length !==11){
            alert('Invalid phone number. Phone number must be eleven numbers')
        }else{
            const enterAmt= prompt('Enter Amount')
           if (enterAmt <= 0){
            alert('Invalid amount. Amount must be greater than zero')
           }else{
            alert(`Successful sent ${enterAmt} to ${enterNumber}`)
           }
        }

        
    }   

}else if(selectOption === '3'){

    const enterPin = prompt('Please enter your PIN')

    if (enterPin.length !== 4){
        alert('Invalid pin. Please enter a valid pin')
    }else{

        let acctNum= prompt('Please enter your account number')
        
        if(acctNum.length !== 10 || acctNum.length > 10){
            alert('Invalid account number. Account Number must be 11 numbers')
        }else{

            const entAmt= prompt('Please enter an amount')
            if(!entAmt || entAmt <=0){
                alert('Invalid amount. Amount must be greater than zero')
            }else{
                alert(`Successful transferred ${entAmt} to ${acctNum}`)
            }
        }

      
        }

}else if(selectOption === '4'){





    const enterPin = prompt('Please enter your PIN')

    // if (enterPin.length !== 4){
    //     alert('Invalid pin. Please enter a valid pin')
    // }else{

    //     let acctNum= prompt('Please enter your account number')
        
    //     if(acctNum.length !== 10 || acctNum.length > 10){
    //         alert('Invalid account number. Account Number must be 11 numbers')
    //     }else{

    //         const entAmt= prompt('Please enter an amount')
    //         if(!entAmt || entAmt <=0){
    //             alert('Invalid amount. Amount must be greater than zero')
    //         }else{
    //             alert(`Successful transferred ${entAmt} to ${acctNum}`)
    //         }
    //     }













}
