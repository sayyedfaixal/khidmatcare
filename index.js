$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

var state = document.querySelector("#states");
var house = document.querySelector("#house");
var people = document.querySelector("#people");

let incState =1;
setInterval(() => {
    if(incState<=24){
        incState++;
    state.innerHTML = incState;
    }
}, 200);


let incHouse = 1;
setInterval(() => {
    if(incHouse <50){
        incHouse++;
        house.innerHTML = incHouse;
    }
}, 100);

let incPeople = 1;
setInterval(() => {
    if(incPeople<=999){
        incPeople ++;
        people.innerHTML = incPeople;
    }
}, 0.2 );
//Onclick about us will take to the footer

function scrollDown(){
    window.scroll({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          });
  }

var donateNow  = document.querySelector('.donate-now');
