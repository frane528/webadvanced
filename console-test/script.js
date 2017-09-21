var shapeTimer = 0; //declare our timer for setTimeout


for (var i = 0; i < 300; i++) { //standard for loop to iterate for 100 console lines
    setTimeout(function() { // introduce the setTimout function
        var shape = ""; //empty string that will be filled below!

        for (var s = 0; s < 30; s++) { //for loop stating 30 characters per line

            var randomShape = Math.random()*100; 
            // use randomShape to determine what combination of shapes and " " each line has
            if (randomShape < 20) {
                shape += "🔷"; //add blue diamond to string
            }else if (randomShape > 20 && randomShape < 40){
                shape += "🔴"; //add red circle to string
            }else if (randomShape > 40 && randomShape < 60){
                shape += "🔶"; //add yellow diamond to string
            }else if (randomShape > 60 && randomShape < 80){
                shape += "🔵"; //add yellow diamond to string
            }else {
                shape += " "; //add space to string
            }

        }
        console.log(shape); //output of snow string
    }, shapeTimer); // snowTimer determines when the sleet string is released
    shapeTimer += 100; // in order to "animate", each sleet string is released +100 milliseconds after the previous one.
} 