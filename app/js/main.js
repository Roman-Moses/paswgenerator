
const passwordBox = document.getElementById("password");
const lengnth = 10;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "!£$%^*@#~,./?|{}[]()+-<>";
const allchas = upperCase + lowerCase + symbol +number;


function createPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lengnth > password.length){
        password += allchas[Math.floor(Math.random() * allchas.length)];
        passwordBox.value = password;

    }
        
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

}