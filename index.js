const form = document.getElementById('form')
const userName = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')

form.addEventListener('submit', e=>{
    e.preventDefault()

    validateInputs()
    updateFields()
    hideForm()
    
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

const validateInputs = ()=> {
    const userNameValue = userName.value.trim()
    const numberValue = number.value.trim()
    const monthValue = month.value.trim() 
    const yearValue = year.value.trim()
    const cvcValue = cvc.value.trim()


    if (userNameValue ===''){
        setError(userName, 'Username is required!')
    } else{
        setSucces(userName)
    }
    if (numberValue ===''){
        setError(number, 'Number cannot be empty!')
    }else{
        setSucces(number)
    }
    if (monthValue ===''){
        setError(month, 'Required!')
    }else{
        setSucces(month)
    }
    if (yearValue===''){
        setError(year, 'Required!')
    }else{
        setSucces(year)
    }   
    if (cvcValue ===''){
        setError(cvc, 'CVC is required!')
    }else{
        setSucces(cvc)
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
    document.querySelector('.complete').style.visibility = 'hidden'
    
}

function hideForm(){
    document.querySelector('.form').style.visibility = 'hidden'
    document.querySelector('.complete').style.visibility = 'visible'
}

