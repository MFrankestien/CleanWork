// the end of the year to count down 

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

const secondcountdown = document.querySelector(".seconds");
const minutescountdown = document.querySelector(".minutes");
const hourscountdown = document.querySelector(".hours");
const Dayscountdown = document.querySelector(".Days");


let counter = setInterval(()=>{
  // get dtae now 
let datenow = new Date().getTime();

//find the date difference 
let dattediff = countDownDate-datenow;

// get time units 
let days = Math.floor(dattediff/(1000 *60 *60 *24));
let hours = Math.floor((dattediff %(1000 *60 *60 *24))/ (1000 *60 *60));
let minuts = Math.floor((dattediff % (1000 *60 *60)) / (1000 *60) );
let seconds = Math.floor((dattediff % (1000 *60)) / 1000 );

//update gui

secondcountdown.innerHTML=seconds;
minutescountdown.innerHTML=minuts;
hourscountdown.innerHTML=hours;
Dayscountdown.innerHTML = days;




},1000)

