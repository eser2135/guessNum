// const scores = [0, 0];
const inpt1 = document.getElementById('inpt');
const bttn1 = document.getElementById('check');
const rstbtn = document.getElementById('btnreset');
const randomNum = Math.trunc(Math.random() * 101);
var numOfAttempts = 10;

bttn1.addEventListener('click', compareTwoNum);
document.getElementById('par4').innerHTML = 'remaining number of the attempts:', numOfAttempts;

function compareTwoNum () {
    
    
    numOfAttempts--;
    if (Number(inpt1.value)<0 || Number(inpt1.value)>100){

        bttn1.innerHTML = "You are out of range!";
    
    }
    else{
        if(randomNum === Number(inpt1.value)) {
            bttn1.innerHTML = "You are an oracle!";
    
        }
        else if(randomNum > Number(inpt1.value)) {
            bttn1.innerHTML = "I am thinking a higher number";
    
        }
        else if(randomNum < Number(inpt1.value)) {
            bttn1.innerHTML = "I am thinking a lower number";
    
        }    

    }

    if (numOfAttempts === 0){

        bttn1.disable = false;
        // numOfAttempts--;

    }

    
         

}
   




// var numbers = []
// for (var i = 1; i <= 100; i++) {
//     numbers.push(i);
// }