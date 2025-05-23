
//regEx

//Regex for accents
const nameRegex = /^[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1]+(\s*[A-Z\u00d1][a-zA-Z-ÿáéíóú\u00f1\u00d1\s]*)$/; //This last \s is recommended, most users leave a space after writing their name
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;


// Selectors

import {createNotification} from "../components/notification.js";

const form = document.getElementById('form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const matchInput = document.getElementById('match-input');
const formBtn = document.getElementById('form-btn');
const notification = document.getElementById('notification')





//Validators

let nameValidation = false;
let emailValidation = false;
let passwordValidation = false;
let matchValidation = false;

const validation = (input, isValid) =>{

   formBtn.disabled = nameValidation && emailValidation && passwordValidation && matchValidation ? false : true;
 
    if (input.value === '') {
        input.classList.remove('outline-green-500', 'outline-red-500', 'outline');
        input.classList.add('focus:outline-indigo-700');

    } else if (isValid) {
        input.classList.remove('outline-red-500', 'focus:outline-indigo-700', 'outline' );
        input.classList.add('outline-green-500', 'outline-2');

    } else {
        input.classList.remove('outline-green-500', 'focus:outline-indigo-700', 'outline');
        input.classList.add('outline-red-500', 'outline-2');
    }
}

// Events

nameInput.addEventListener('input', e => {
 nameValidation = nameRegex.test(e.target.value);
 validation(nameInput, nameValidation); 
 
});
  
emailInput.addEventListener('input', e => {
    
    emailValidation = emailRegex.test(e.target.value);
    validation(emailInput, emailValidation);
   });
  
   passwordInput.addEventListener('input', e => {
    passwordValidation = passwordRegex.test(e.target.value);
    matchValidation = e.target.value === matchInput.value ;
    validation(matchInput, matchValidation);
    validation(passwordInput, passwordValidation);
   });
  
   matchInput.addEventListener('input', e => {
    matchValidation = e.target.value === passwordInput.value ;
    validation(matchInput, matchValidation)
   });

   form.addEventListener('submit', async e =>{
    e.preventDefault();
    try {
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }

        const {data} = await axios.post('http://127.0.0.1:3000/api/users', newUser);
       
        
        console.log(data.message); 
        createNotification(false, data.message); 
        
        setTimeout(()=>{
            notification.innerHTML = ''
        },5000)

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        matchInput.value = '';

        
    // validation(nameValidation, false);
    // validation(emailInput, false);
    // validation(passwordValidation, false);
    // validation(matchValidation, false);

    } catch (error) {
        
        if (error.response) {
            
            console.log(error.response.data.message); 
            createNotification(true, error.response.data.message);
        } else {
            
            console.error("Error de red o conexión:", error.message); 
            createNotification(true, "No se pudo conectar con el servidor. Intenta de nuevo.");
        }
        
        setTimeout(()=>{
            notification.innerHTML = ''
        },5000)
    }
   });
   
     
