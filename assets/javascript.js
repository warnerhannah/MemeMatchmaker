// initialize firebase 

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

    $("#button-2").on("click", function picClick() {
        submittedImage = $(this).val().trim();
        analyzePhoto();
    })

});

$(document).ready(function () {

    $("#submit-image").on("click", function  () {
        submittedImage = $("#image-input").val().trim();
        analyzePhoto();
    })
})

analyzePhoto();

// HANNAH -
// API FUNCTION - FACE PLUS PLUS
// AJAX 
// SUBMIT PHOTO TO QUERY
// PULL DATA FROM FACE++
// SAVE VARIABLES TO PLUG INTO MEME GENERATOR 
function analyzePhoto() {
  // API KEY JmLDfiZvxIblQdZh4RM0o_bKDTpIxI2p
  var imageURL = "data:image/jpeg;base64,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";
  var corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  var queryURL = corsAnywhere + "https://api-us.faceplusplus.com/facepp/v3/detect"

  $.ajax({
    url: queryURL,
    method: "POST",
    data: {
      api_key: "JmLDfiZvxIblQdZh4RM0o_bKDTpIxI2p",
      api_secret: "xxtvkuHADWC1zeyuKyRDYNTf2FHffqWX",
      image_base64: imageURL,
      return_attributes: "emotion",
    }
  }).then(function (response) {
    console.log(response)
    emotionsArray = ["anger", "disgust", "fear", "happiness", "neutral", "sadness", "surprise"]
    // var highestNumber = _(response.faces[0].attributes.emotion).values().max();
    obj = (response.faces[0].attributes.emotion);
    /// GET KEY FROM VALUE
    var maxKey = _.maxBy(Object.keys(obj), o => obj[o]);
    keyword = maxKey
    generateMeme(keyword);
  });
};



// API FUNCTION - MEME GENERATOR
function generateMeme(word) {
  // API KEY 9aa77d63-bbeb-4dba-ab33-cccbec5e6419
  //.instanceImageURL for image!
  console.log(word)
  var queryURL = "http://version1.api.memegenerator.net/Generators_Search?q=" + word + "&apiKey=9aa77d63-bbeb-4dba-ab33-cccbec5e6419";
  console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // EMPTY CURRENT MEME IMAGE 
    $("#memeDump").empty();
    // // CREATE NEW IMAGE
    var yourMeme = $("<img>");
    // // TARGET URL FROM RESPONSE
    var memeURL = response.result[0].imageUrl;
    // // CHANGE SOURCE TO NEW MEME URL
    yourMeme.attr("src", memeURL);
    // // APPEND TO DIV TO SHOW ON HTML
    $("#memeDump").append(yourMeme);
  }).catch(function(err){
    console.log(err);
  });
}


// POSSIBILITY TO USE FIREBASE 
