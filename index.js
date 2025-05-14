// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    console.log(count)
    count = count + 1
    countEl.innerText = count
}
document.getElementById("count-el").innerText = count
