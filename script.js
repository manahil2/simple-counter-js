let result = document.getElementById("result");
let counter = 0;
function increment(){
    counter++;
    result.textContent = counter;
}
function decrement(){
    counter--;
    result.textContent = counter;
}
function reset(){
    counter=0;
    result.textContent = counter;
}