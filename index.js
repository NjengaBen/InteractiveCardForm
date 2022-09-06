const form = document.getElementById('form')
const userName = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')

form.addEventListener('submit', e=>{
    e.preventDefault()

    validateInputs()
    // updateFields()    
    // hideForm()      
})

const setError = (element, message) =>{
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSucces = element =>{
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const checkUserName = () =>{
    let valid = false
    const userNameValue = userName.value.trim()

    if(userNameValue ===''){
        setError(userName, 'Username is required')
    }else{
        setSucces(userName)
        valid = true
    }
    return valid

}

const checkCardNumber = () =>{
    let valid = false
    const numberValue = number.value.trim()

    if (numberValue === ''){
        setError(number, 'Number cannot be empty!')        
    }else{
        setSucces(number)
        valid = true
    }
    return valid
}

const checkMonth = () =>{
    let valid = false
    const monthValue = month.value.trim()

    if (monthValue === ''){
        setError(month, 'Required!')        
    }else{
        setSucces(month)
        valid = true
    }
    return valid
}

const checkYear = () =>{
    let valid = false
    const yearValue = year.value.trim()

    if (yearValue === ''){
        setError(year, 'Required!')        
    }else{
        setSucces(year)
        valid = true
    }
    return valid
}

const checkCVC = () =>{
    let valid = false
    const cvcValue = cvc.value.trim()

    if (cvcValue ===''){
        setError(cvc, 'Required!')        
    }else{
        setSucces(cvc)
        valid = true
    }
    return valid
}

const validateInputs = () => {
    let validUserName = checkUserName()
    let validCardNumber = checkCardNumber()
    let validMonth = checkMonth()
    let validYear = checkYear()
    let validCVC = checkCVC()

    let formValid = validUserName && validCardNumber && validMonth && validYear && validCVC

    if(formValid){
        updateFields()
        hideForm()
    }
}

const updateFields = () =>{    
    const numberValue = number.value
    const userNameValue = userName.value
    const cvcValue = cvc.value
    const monthValue = month.value 
    const yearValue = year.value

    const cardNumber = document.querySelector('.card-number>p')
    cardNumber.innerText = numberValue

    const cvcNumber = document.querySelector('.back-content>p')
    cvcNumber.innerText = cvcValue

    const cardUser = document.querySelector('.card-user>p')
    cardUser.innerText = userNameValue

    const date = document.querySelector('.card-user>span')
    date.innerText = `${monthValue}/${yearValue}`     
}

document.getElementsByClassName('form').onload = showForm()

function showForm(){
    document.querySelector('.complete').style.display = 'none'
    
}

function hideForm(){
    document.querySelector('.form').style.display = 'none'
    document.querySelector('.complete').style.display = 'inherit'
}

