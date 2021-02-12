function loginUser(){
    const login = document.querySelector('#login');
    login.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    console.log(email)
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential =>{
            alert('Usuario logeado')
        })
        .catch(error => console.error(error));
    });
}

loginUser();