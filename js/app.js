const loginCard = document.querySelector("#Logincard");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("#Login-now");
const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener('submit', function(event){
    event.preventDefault();



    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username === 'admin' && password === '123456') {
        window.location.href = 'https://miro.com/app/board/uXjVLMTyicw=/'
    } else {
        alert('Notogri parol kirtildi')
    }
})

