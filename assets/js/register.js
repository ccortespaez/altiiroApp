const registerUser = () => {
    let errors = []; //Arreglo vacio que guarda errores

    const register = document.querySelector('#register');
    let cont = document.querySelector('.cont-errors');
        
    register.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    //validacion de inputs


    if(email.length < 0|| password.length <= 5){
        errors.push('Error al registrarse');
        console.log('error')
    }
    if(errors.length === 0){
        cont.innerHTML = '';
        console.log(email);
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert('usuario registrado')
                
            })
            .catch(error => (console.error(`Warning ${error}`)))
    }else{
        //Se crea una alerta con los errores
        let ul = document.createElement('ul');
        ul.classList.add('alert', 'bg-black');
        for(let i = 0; i < errors.length; i++) {
            let error = errors[i];
            let li = document.createElement('li');
            li.textContent = error;
            ul.appendChild(li);
        }
        cont.appendChild(ul);
        errors.pop(); 
    }
});

    
   
}

registerUser();