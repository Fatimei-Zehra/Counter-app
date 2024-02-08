
let count = 0;
const countValue = document.getElementById("number");
const increment = document.getElementById("plus");
const decrement = document.getElementById("minus");
const reset = document.getElementById("reset");

function incrementValue() {
    count++;
    countValue.textContent = count;

    if (count > 0) {
        countValue.style.color = "red"
    }
}

function decrementValue() {
    count--;
    countValue.textContent = count;
}

function resetValue() {
    count = 0;
    countValue.textContent = count;
}

increment.addEventListener("click", incrementValue);
decrement.addEventListener("click", decrementValue);
reset.addEventListener("click", resetValue);