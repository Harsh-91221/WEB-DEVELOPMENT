const passwordBox=document.getElementById("Password");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()_+-=";
const allChars=upperCase+lowerCase+number+symbol;
function createPassword(){
    let Password="";
    Password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password+=number[Math.floor(Math.random()*number.length)];
    Password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>Password.length){
        Password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=Password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}