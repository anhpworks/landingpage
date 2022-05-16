let noob = document.querySelector('button');
let noob2 = document. querySelector('li');

noob.addEventListener('click',signIn);

function signIn() {
    let name = prompt('What is your name?')
    noob2.textContent = `Hi, ${name}`
    noob.textContent = `Welcome`
}