// initialize firebase 
var config = {
  apiKey: "AIzaSyC5hdMO9KuQcj0MXvZUT62F-SylGGJDbyo",
  authDomain: "memematchmaker.firebaseapp.com",
  databaseURL: "https://memematchmaker.firebaseio.com",
  projectId: "memematchmaker",
  storageBucket: "memematchmaker.appspot.com",
  messagingSenderId: "433999765554"
};
firebase.initializeApp(config);
var database = firebase.database();

// GLOBAL VARIABLES
var keyword;
var submittedImage;
// OLLIE

// TRY IT OUT 
// On click of an image
// Reference API 
// Return MEME


// INPUT TO SUBMIT YOUR OWN PHOTO 
// SAVE THAT PHOTO TO A VARIABLE TO REFERENCE IT 
// ON SUBMIT BUTTON
// Reference API 
// Return MEME


$(document).ready(function () {

  $("img").on("click", function picClick() {
    submittedImage = $(this).attr("url");
    console.log(submittedImage);
    analyzePhoto();
  })
});

$(document).ready(function () {

<<<<<<< HEAD
    $("#submit-image").on("click", function  () {
        submittedImage = $("#image-input").val().trim();
        console.log(submittedImage);
        analyzePhoto();
        $("#image-input").val("");

        var newImage= {
          image: submittedImage,
        };
        database.ref().push(newImage);

    })
=======
  $("#submit-image").on("click", function () {
    submittedImage = $("#image-input").val().trim();
    console.log(submittedImage);
    analyzePhoto();
    displayYourImage(submittedImage);
    $("#image-input").val("");
  })
>>>>>>> c5011f00a41b7238164b8c0a61625f3b995cb3ba
})


function displayYourImage(source) {
  console.log("working");
  $("#yourImageDump").empty();
  var yourImg = $("<img>");
  yourImg.attr("id", "your-pic");
  yourImg.attr("src", source);
  $("#yourImageDump").append(yourImg);
}


// HANNAH -
// API FUNCTION - FACE PLUS PLUS
// AJAX 
// SUBMIT PHOTO TO QUERY
// PULL DATA FROM FACE++
// SAVE VARIABLES TO PLUG INTO MEME GENERATOR 
function analyzePhoto() {
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

    console.log(response)
    emotionsArray = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"]
    // var highestNumber = _(response.faces[0].attributes.emotion).values().max();
    obj = (response.faces[0].attributes.emotion);
    /// GET KEY FROM VALUE
    var maxKey = _.maxBy(Object.keys(obj), o => obj[o]);
    keyword = maxKey;
    generateMeme(keyword);
  });
};



// API FUNCTION - MEME GENERATOR
function generateMeme(word) {
  // API KEY 9aa77d63-bbeb-4dba-ab33-cccbec5e6419
  //.instanceImageURL for image!
  console.log(word);
  var queryURL = "http://version1.api.memegenerator.net/Generators_Search?q=" + word + "&apiKey=9aa77d63-bbeb-4dba-ab33-cccbec5e6419";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // EMPTY CURRENT MEME IMAGE 
    $("#memeDump").empty();
    // // CREATE NEW IMAGE
    var yourMeme = $("<img>");
    yourMeme.attr("id", "your-meme");
    // // TARGET URL FROM RESPONSE
    var i = Math.floor((Math.random() * 11) + 0);
    console.log(i);
    var memeURL = response.result[i].imageUrl;
    // // CHANGE SOURCE TO NEW MEME URL
    yourMeme.attr("src", memeURL);
    // // APPEND TO DIV TO SHOW ON HTML
    $("#memeDump").append(yourMeme);
  }).catch(function (err) {
    console.log(err);
  });
}


// POSSIBILITY TO USE FIREBASE 
