var config = {
    apiKey: "AIzaSyBowPNAAT8vpoKjGJLwm1uytmrrLELFT_M",
    authDomain: "trainsetto.firebaseapp.com",
    databaseURL: "https://trainsetto.firebaseio.com",
    projectId: "trainsetto",
    storageBucket: "trainsetto.appspot.com",
    messagingSenderId: "1009756140383"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var trainN = "";
  var trainDest = ""
  var trainF = 0;
  var trainArrive = 0;
  var trainMinAway = 0;

  database.ref().set({
      trainName: trainN,
      trainDestination: trainDest,
      trainFrequency: trainF,
      nextArrival: trainArrive,
      minutesAway: trainMinAway
  })

  // I need to use moment make an on click function that put info in each of these columns.
  function makeTable() {
    return `
  <tr>
          <th scope="row">${trainN}</th>
          <td>${trainDest}</td>
          <td>${trainF}</td>
          <td>${trainArrive}</td>
          <td>############</td>
  `};
$(document).on("click", "button", function(){
  event.preventDefault();
  
  trainN = $('#name-input').val().trim();
  trainDest = $('#destination-input').val().trim();
  trainF = $('#frequency-input').val();
  trainArrive = $('#ftt-input').val();
//.ref().push????
$('tbody').append(makeTable());
  database.ref().push({
    trainName: trainN,
    trainDestination: trainDest,
    trainFrequency: trainF,
    nextArrival: trainArrive,
  })
});

// Real Time Clock
const clock = document.getElementById('clock');

function updateTime () {

const now = moment();
const humanReadable = now.format('hh:mm:ssA');

clock.textContent = humanReadable;
}

setInterval(updateTime, 1000);
updateTime();

// database.on("value", function(snapshot){
//   // Logging everything coming out of snapshot
//   console.log(snapshot.val());
//   console.log(snapshot.val().TrainN);
//   console.log(snapshot.val().TrainDest);
//   console.log(snapshot.val().TrainF);
//   console.log(snapshot.val().TrainArrive);
//})







  
