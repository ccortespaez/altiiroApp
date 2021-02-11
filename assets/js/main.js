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

function loginUser(){
    const login = document.querySelector('#login');
    login.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert('usuario logeado');
        })
    })
}