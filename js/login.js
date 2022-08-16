document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if(email === 'bulbulahasan@gmail.com' && password === 'hellojs'){
        window.location.href = "bank.html";
    }
    else {
        alert('Please enter valid credential')
    }
})
document.getElementById('btn-logout').addEventListener('click', function(){
    console.log('button clicked');
})