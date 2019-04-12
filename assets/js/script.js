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
      TrainName: trainN,
      TrainDestination: trainDest,
      TrainFrequency: trainF,
      NextArrival: trainArrive,
      MinutesAway: trainMinAway
  })

  
