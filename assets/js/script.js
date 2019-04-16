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

  var trainN = $('#name-input').val();
  var trainDest = $('#destination-input').val()
  var trainF = $('#frequency-input').val()
  var trainArrive = $('#ftt-input').val();

  database.ref().set({
      trainName: trainN,
      trainDestination: trainDest,
      trainFrequency: trainF,
      nextArrival: trainArrive,
  })
$(document).on("click", "button", function(){
  event.preventDefault();
  
  trainN = $('#name-input').val().trim();
  trainDest = $('#destination-input').val().trim();
  trainF = $('#frequency-input').val().trim();
  trainArrive = $('#ftt-input').val().trim();
//.ref().push????

$('tbody').append(makeTable());
  database.ref().push({
    trainName: trainN,
    trainDestination: trainDest,
    trainFrequency: trainF,
    nextArrival: trainArrive,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

    
  })
database.ref().on("value", function(snapshot){
  // Logging everything coming out of snapshot
  console.log(snapshot.val());
  console.log(snapshot.val().trainName);
  console.log(snapshot.val().trainDestination);
  console.log(snapshot.val().trainFrequency);
  console.log(snapshot.val().nextArrival);
})



});
  // I need to use moment make an on click function that put info in each of these columns.
  function makeTable() {
    return `
  <tr>
          <th scope="row">${trainN}</th>
          <td>${trainDest}</td>
          <td>${trainF}</td>
          <td>############</td>
          <td>############</td>
  `};


// Real Time Clock
const clock = document.getElementById('clock');
function updateTime () {

const now = moment();
const humanReadable = now.format('HH:mm:ss A');

clock.textContent = humanReadable;
}
setInterval(updateTime, 1000);
updateTime();


  












  
