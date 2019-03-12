// INITIALIZE FIREBASE
var config = {
  apiKey: "AIzaSyC5hdMO9KuQcj0MXvZUT62F-SylGGJDbyo",
  authDomain: "memematchmaker.firebaseapp.com",
  databaseURL: "https://memematchmaker.firebaseio.com",
  projectId: "memematchmaker",
  storageBucket: "memematchmaker.appspot.com",
  messagingSenderId: "433999765554"
};
firebase.initializeApp(config);
// DECLARE FIREBASE VARIABLE
var database = firebase.database();

// GLOBAL VARIABLES
var keyword;
var submittedImage;
var memeArray = [];

$("#loadingGif").hide();
$("#knowyourmeme").hide();


// PULL RECENTLY GENERATED MEMES FROM FB 
// DISPLAY THEM AS IMAGES 
database.ref().on("child_added", function (snapshot) {
  memeArray.push(snapshot.val().meme);
  displayRecentMemes();
});


// append last 5 of array to display
function displayRecentMemes() {
  console.log(memeArray)
  var useArray = (memeArray.slice(-5));
  console.log(useArray);

  $("#recentmeme1").attr("src", useArray[0]);
  $("#recentmeme2").attr("src", useArray[1]);
  $("#recentmeme3").attr("src", useArray[2]);
  $("#recentmeme4").attr("src", useArray[3]);
  $("#recentmeme5").attr("src", useArray[4]);
};



// ON CLICK FXN FOR EXAMPLE IMAGES
$(document).ready(function () {
  $("img").on("click", function picClick() {
    // $("#memeDump").empty();

    $("#loadingGif").show();

    // get the url of the site
    submittedImage = $(this).attr("src");
    displayYourImage(submittedImage);
    analyzePhoto();
  })
});


// ON CLICK FXN FOR SUBMIT BUTTON
$(document).ready(function () {
  $("#submit-image").on("click", function () {
    submittedImage = $("#image-input").val().trim();
    $("#loadingGif").show();

    analyzePhoto();
    displayYourImage(submittedImage);
    $("#image-input").val("");
  })
})

// FUNCTION TO DISPLAY THE SUBMITTED IMAGES
function displayYourImage(source) {
  $("#yourImageDump").empty();
  var yourImg = $("<img>");
  yourImg.attr("id", "your-pic");
  yourImg.attr("src", source);
  $("#yourImageDump").append(yourImg);
}

$(document).ajaxError(function () {
  alert("Connection to server failed, please try again!")
});


// FUNCTION FOR API FACE++
function analyzePhoto() {
  $("#memeDump").empty();
  $("#knowyourmeme").hide();

  // API KEY JmLDfiZvxIblQdZh4RM0o_bKDTpIxI2p

  var imageURL = submittedImage
  var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  var queryURL = corsAnywhere + "https://api-us.faceplusplus.com/facepp/v3/detect"

  $.ajax({
    url: queryURL,
    method: "POST",
    data: {
      api_key: "JmLDfiZvxIblQdZh4RM0o_bKDTpIxI2p",
      api_secret: "xxtvkuHADWC1zeyuKyRDYNTf2FHffqWX",
      image_url: imageURL,
      return_attributes: "emotion",
    }
  }).then(function (response) {
    emotionsArray = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"]
    // var highestNumber = _(response.faces[0].attributes.emotion).values().max();
    obj = (response.faces[0].attributes.emotion);
    /// GET KEY FROM VALUE
    var maxKey = _.maxBy(Object.keys(obj), o => obj[o]);
    keyword = maxKey;
    generateMeme(keyword);
  });
};



// FUNCTION FOR API - MEMEGENERATOR
function generateMeme(word) {
  // API KEY 9aa77d63-bbeb-4dba-ab33-cccbec5e6419
  console.log(word);
  var queryURL = "http://version1.api.memegenerator.net/Generators_Search?q=" + word + "&apiKey=9aa77d63-bbeb-4dba-ab33-cccbec5e6419";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#loadingGif").hide();
    $("#knowyourmeme").hide();

    // EMPTY CURRENT MEME IMAGE 
    $("#memeDump").empty();
    // // CREATE NEW IMAGE
    var yourMeme = $("<img>");

    yourMeme.attr("id", "your-meme");
    console.log(yourMeme);
    // // TARGET URL FROM RESPONSE
    var i = Math.floor((Math.random() * 11) + 0);
    var memeURL = response.result[i].imageUrl;
    // // CHANGE SOURCE TO NEW MEME URL
    yourMeme.attr("src", memeURL);
    // // APPEND TO DIV TO SHOW ON HTML
    $("#memeDump").append(yourMeme);

    // ADD MEME NAME
    var memeName = $("<p>")
    name = response.result[i].displayName.toUpperCase();
    memeName.text(name);
    $("#memeDump").append(memeName);

    $("a").attr("href", "https://imgflip.com/search?q=" + name)
    $("#knowyourmeme").show();

    submittedImage = $("#image-input").val().trim();

    // ASSIGN NEW MEMES TO FIREBASE
    var newMeme = {
      meme: memeURL,
    };
    console.log(newMeme);
    database.ref().push(newMeme);
  }).catch(function (err) {
    console.log(err);
  });
}
