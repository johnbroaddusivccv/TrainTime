var config = {
  apiKey: "AIzaSyCDo16xnQQH6KYldB3RS_AjpWR6W0oIFIk",
  authDomain: "firepracti.firebaseapp.com",
  databaseURL: "https://firepracti.firebaseio.com",
  projectId: "firepracti",
  storageBucket: "firepracti.appspot.com",
  messagingSenderId: "474512306166"
};
firebase.initializeApp(config);

var db = firebase.database();
  $("#add-train").on("click", function() {
      event.preventDefault();

      var name = $("#name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrainT = moment($("#first-train-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
      var frequency = $("#frequency-input").val().trim();



      var trainHolder = {
      
      name: name,
      destination: destination,
      firstTrain: firstTrainT,
      frequency: frequency
      };

      db.ref().push(trainHolder);

      // Clears Input

      $("#name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency-input").val("");

      return false;


  });

  db.ref().on("child_added", function(childSnapShot, prevChildKey) {
      var cs = childSnapShot.val();

      var tName = cs.name;
      var tDestination = cs.destination;
      var tFrequency = cs.frequency;
      var tFirstTrain = cs.firstTrain;

      var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");

      var remainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency;

      var tMinutes = tFrequency - remainder;

      // Arrival Time
      var arrivalTime = moment().add(tMinutes, "m").format("HH:mm A");


      var tableRow = $("<tr>").attr("data-key", cs);

      $("<td>").text(tName).appendTo(tableRow);
      $("<td>").text(tDestination).appendTo(tableRow);
      $("<td>").text(tFrequency).appendTo(tableRow);
      $("<td>").text(arrivalTime).appendTo(tableRow);
      $("<td>").text(tMinutes).appendTo(tableRow);
      $("#trains").append(tableRow);


  });

// Real Time Clock
const clock = document.getElementById('clock');
function updateTime () {

const now = moment();
const humanReadable = now.format('HH:mm:ss A');

clock.textContent = humanReadable;
}
setInterval(updateTime, 1000);
updateTime();


  












  
