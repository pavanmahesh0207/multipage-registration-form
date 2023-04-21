let details = {
  firstNameInput: '',
  lastNameInput: '',
  dob: '',
  email: '',
  fatherFirstName: '',
  fatherLastName: '',
  motherFirstName: '',
  motherLastName: '',
  nationality: '',
  address: '',
  city: '',
  gender: '',
  country: '',
  mobile: '',
}
//First Name
let firstNameInput = document.getElementById('first-name-input')
let firstNameError = document.getElementById('first-name-error')
let emptyFirstNameError = document.getElementById('empty-first-name')

firstNameInput.addEventListener('change', (e) => {
  details.firstNameInput = e.target.value
})

//Last name
let lastNameInput = document.getElementById('last-name-input')
let lastNameError = document.getElementById('last-name-error')
let emptyLastNameError = document.getElementById('empty-last-name')

lastNameInput.addEventListener('change', (e) => {
  details.lastNameInput = e.target.value
})

//date
let dateInput = document.getElementById('date')

dateInput.addEventListener('change', (e) => {
  details.dob = e.target.value
})

//Email
let emailInput = document.getElementById('email')
let emailError = document.getElementById('email-error')
let emptyEmailError = document.getElementById('empty-email')

emailInput.addEventListener('change', (e) => {
  details.email = e.target.value
})

//Father's Name
let fathFirstNameInput = document.getElementById('father-first-name-input')
let fathFirstNameError = document.getElementById('father-first-name-error')
let emptyFathError = document.getElementById('father-empty-first-name')

fathFirstNameInput.addEventListener('change', (e) => {
  details.fatherFirstName = e.target.value
})

let fathLastNameInput = document.getElementById('father-last-name-input')
let fatherFirstNameError = document.getElementById('father-last-name-error')
let emptyFatherError = document.getElementById('father-empty-last-name')

fathLastNameInput.addEventListener('change', (e) => {
  details.fatherLastName = e.target.value
})

//Mothers name
let MotherFirstNameInput = document.getElementById('mother-first-name-input')
let MotherFirstNameError = document.getElementById('mother-first-name-error')
let emptyMothError = document.getElementById('mother-empty-first-name')

MotherFirstNameInput.addEventListener('change', (e) => {
  details.motherFirstName = e.target.value
})

let MotherLastNameInput = document.getElementById('mother-last-name-input')
let motherFirstNameError = document.getElementById('mother-last-name-error')
let emptyMotherError = document.getElementById('mother-empty-last-name')

MotherLastNameInput.addEventListener('change', (e) => {
  details.motherLastName = e.target.value
})

//nationality
let nationalityInput = document.getElementById('nation')

nationalityInput.addEventListener('change', (e) => {
  details.nationality = e.target.value
})

//Home Adress
let HomeAddInput = document.getElementById('home-address')
HomeAddInput.addEventListener('change', (e) => {
  details.address = e.target.value
})

//City Address
let CityAddInput = document.getElementById('city-adress')

CityAddInput.addEventListener('change', (e) => {
  details.city = e.target.value
})

//country
let countryInput = document.getElementById('country')
countryInput.addEventListener('change', (e) => {
  details.country = e.target.value
})

//gender
let male = document.getElementById('male')
male.addEventListener('change', (e) => {
  details.gender = e.target.value
})

//Phone
let phoneInput = document.getElementById('phone')
let phoneError = document.getElementById('phone-error')
let emptyPhoneError = document.getElementById('empty-phone')

phoneInput.addEventListener('change', (e) => {
  details.mobile = e.target.value
})

//Valid
let validClasses = document.getElementsByClassName('valid')
console.log(validClasses)
let invalidClasses = document.getElementsByClassName('error')

//Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/
  return regex.test(text)
}

//Phone number verification
const phoneVerify = (number) => {
  const regex = /^[0-9]{10}$/
  return regex.test(number)
}

//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/
  return regex.test(input)
}

//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    emptyErrorReference.classList.remove('hide')
    otherErrorReference.classList.add('hide')
    inputReference.classList.add('error')
  } else {
    emptyErrorReference.classList.add('hide')
  }
}

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove('hide')
  inputReference.classList.remove('valid')
  inputReference.classList.add('error')
}

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove('error')
  inputReference.classList.add('valid')
}

//First name
firstNameInput.addEventListener('input', () => {
  if (textVerify(firstNameInput.value)) {
    firstNameError.classList.add('hide')
    validInput(firstNameInput)
  } else {
    errorUpdate(firstNameInput, firstNameError)
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError)
  }
})

emailInput.addEventListener('input', () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add('hide')
    validInput(emailInput)
  } else {
    errorUpdate(emailInput, emailError)
    emptyUpdate(emailInput, emptyEmailError, emailError)
  }
})

//Last name
lastNameInput.addEventListener('input', () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add('hide')
    validInput(lastNameInput)
  } else {
    errorUpdate(lastNameInput, lastNameError)
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError)
  }
})

//Phone
phoneInput.addEventListener('input', () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add('hide')
    validInput(phoneInput)
  } else {
    errorUpdate(phoneInput, phoneError)
    emptyUpdate(phoneInput, emptyPhoneError, phoneError)
  }
})

//Submit
let submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (emailInput !== '') {
    alert('success')
  } else {
    alert('Error please fill all input fields')
  }
  console.log(details)
  localStorage.setItem('details', JSON.stringify(details))
})

//academic details

let AcademicDetails = {
  HSCInstitutionName: '',
  HSCPercentage: '',
  hscBoard: '',
  SSCInstitutionName: '',
  sscPercentage: '',
  sscBoard: '',
  pursuing: '',
  institutionName: '',
  OverallPercentage: '',
  backlogs: '',
}
let HSCInstitutionNameInput = document.getElementById('HSCInstitutionName')

HSCInstitutionNameInput.addEventListener('change', (e) => {
  AcademicDetails.HSCInstitutionName = e.target.value
})

let HSCPercentageInput = document.getElementById('HSCpercentage')

HSCPercentageInput.addEventListener('change', (e) => {
  AcademicDetails.HSCPercentage = e.target.value
})

let hscBoardInput = document.getElementById('hscBoard')

hscBoardInput.addEventListener('change', (e) => {
  AcademicDetails.hscBoard = e.target.value
})

let SSCInstitutionNameInput = document.getElementById('SSCInstitutionName')

SSCInstitutionNameInput.addEventListener('change', (e) => {
  AcademicDetails.SSCInstitutionName = e.target.value
})

let sscPercentageInput = document.getElementById('sscPercentage')

sscPercentageInput.addEventListener('change', (e) => {
  AcademicDetails.sscPercentage = e.target.value
})

let sscBoardInput = document.getElementById('sscBoard')

sscBoardInput.addEventListener('change', (e) => {
  AcademicDetails.sscBoard = e.target.value
})

let pursuingInput = document.getElementById('pursuing')

pursuingInput.addEventListener('change', (e) => {
  AcademicDetails.pursuing = e.target.value
})

let institutionNameInput = document.getElementById('institutionName')

institutionNameInput.addEventListener('change', (e) => {
  AcademicDetails.institutionName = e.target.value
})

let OverallPercentageInput = document.getElementById('OverallPercentage')

OverallPercentageInput.addEventListener('change', (e) => {
  AcademicDetails.OverallPercentage = e.target.value
})

let backlogsInput = document.getElementById('backlogs')
backlogsInput.addEventListener('change', (e) => {
  AcademicDetails.backlogs = e.target.value
})

let educationButton = document.getElementById('educationButton')

educationButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (invalidClasses.length == 0) {
    alert('Success')
  } else {
    alert('Error please fill all input fields')
  }
  console.log(details)
  localStorage.setItem('academicDetails', JSON.stringify(AcademicDetails))
})
