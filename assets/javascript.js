// initialize firebase 

// GLOBAL VARIABLES
var keyword;

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





// HANNAH -
// API FUNCTION - FACE PLUS PLUS
// AJAX 
// SUBMIT PHOTO TO QUERY
// PULL DATA FROM FACE++
// SAVE VARIABLES TO PLUG INTO MEME GENERATOR 
function analyzePhoto() {

    var queryURL = ""

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        // return a keyword to save to kw variable
      });


};

// API FUNCTION - MEME GENERATOR
// AJAX
// SUBMIT KEY WORDS FROM FACE++ TO QUERY
// GENERATE/DISPLAY MEME
// DISPLAY MEME NAME (?)
function generateMeme() {
    // API KEY 9aa77d63-bbeb-4dba-ab33-cccbec5e6419
    //.instanceImageURL for image!
    keyword = keyword;
    var queryURL = "http://version1.api.memegenerator.net//Generators_Search?q=" + keyword + "&pageIndex=0&pageSize=12&apiKey=9aa77d63-bbeb-4dba-ab33-cccbec5e6419";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          
      });
};








// POSSIBILITY TO USE FIREBASE 
// DISPLAY RECENT MEMES GENERATED 