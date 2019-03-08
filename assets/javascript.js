// initialize firebase 


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

   
$("button").on("click", function () { //making buttons connect
    var motorcycle = $(this).attr("data-motorcycle");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      image + "&api_key=VQQWbrTPXO4uxcgqUPk295whNafMY3iF";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      var results = response.data;


      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");



        var image = $("<img>");
        motorcycleImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(motorcycleImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
      console.log(response);


    });

  });



// HANNAH -

// API FUNCTION - FACE PLUS PLUS
// AJAX 
// SUBMIT PHOTO TO QUERY
// PULL DATA FROM FACE++
// SAVE VARIABLES TO PLUG INTO MEME GENERATOR 

// API FUNCTION - MEME GENERATOR
// AJAX
// SUBMIT KEY WORDS FROM FACE++ TO QUERY
// GENERATE/DISPLAY MEME
// DISPLAY MEME NAME 







// POSSIBILITY TO USE FIREBASE 
// DISPLAY RECENT MEMES GENERATED 