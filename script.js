
function submitInfo() {
    const name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let age = document.getElementById('ageInput').value;
    let land = document.getElementById('landInput').value;

    const infoString = 'Welcome, ' + name + '<br>Your Email is still : ' + email +'?'+ '<br> Age: ' + age + '<br>Land : ' + land;
    document.getElementById('output').innerHTML = infoString;
  }

//   function submitName (){
//      let task_five_input = document.querySelector("nameInput").value;
    
//     let task_five_p = document.querySelector("#task_five_p");
//     task_five_p.textContent = task_five_input;
// }
// let task_five_button = document.querySelector("#task_five_button");
// task_five_button.addEventListener("click",submitName);    