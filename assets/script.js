//alert("Loaded")

let headsCount = 0;
if(localStorage.getItem("headsCount") !== null) {
    headsCount = parseInt(localStorage.getItem("headsCount"));
}

let tailsCount = 0;
if(localStorage.getItem("tailsCount") !== null) {
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
}


//updates the scoreboard/table
document.querySelector("#heads-counter"). textContent = headsCount;
document.querySelector("#tails-counter"). textContent = tailsCount;
//calculate percentage
let total = headsCount + tailsCount;

let percentageHeads = Math.round(headsCount/total * 100);
let percentageTails = Math.round(tailsCount/total * 100);

document.querySelector('#heads-percent'). textContent = percentageHeads + "%";
document.querySelector('#tails-percent'). textContent = percentageTails +"%";
console.log(`outcome of heads: ${percentageHeads} and tails ${percentageTails}`)


localStorage.setItem("headsCount", headsCount);
localStorage.setItem("tailsCount", tailsCount);

//add eventlister and function to the flip penny button

let flipButton = document.querySelector("#flip-btn");
//when clicked the flip the penny button
flipButton.addEventListener("click",function(){
    
let isHeads =Math.random() < 0.5
// update the penny image
if(isHeads) {
    //update content to display heads
    //update image
    document.querySelector("#penny-img").src ="./assets/images/penny-heads.jpg";
    //updates the h2 with penny flip outcome
    document.querySelector("#result-header").textContent = "You Flipped Heads!";
//increment the heads count
    headsCount++
} else{
    //update content to display tails
    document.querySelector("#penny-img").src ="./assets/images/penny-tails.jpg";
    //updates the h2 with penny flip outcome
    document.querySelector("#result-header").textContent = "You Flipped Tails!";
    //increment the heads count
    tailsCount++
}





//updates the scoreboard/table
document.querySelector("#heads-counter"). textContent = headsCount;
document.querySelector("#tails-counter"). textContent = tailsCount;
//calculate percentage
let total = headsCount + tailsCount;

let percentageHeads = Math.round(headsCount/total * 100);
let percentageTails = Math.round(tailsCount/total * 100);

document.querySelector('#heads-percent'). textContent = percentageHeads + "%";
document.querySelector('#tails-percent'). textContent = percentageTails +"%";
console.log(`outcome of heads: ${percentageHeads} and tails ${percentageTails}`)


localStorage.setItem("headsCount", headsCount);
localStorage.setItem("tailsCount", tailsCount);

})

//clear scoreboard
document.querySelector("#reset-btn").addEventListener("click", function() {
    headsCount = 0;
    tailsCount = 0;

    scoreTable()
    
})