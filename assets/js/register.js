
function registerUser(){
    const register = document.querySelector('#register');
    register.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;

    console.log(email);
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('usuario registrado')
        })
    });
}

registerUser();