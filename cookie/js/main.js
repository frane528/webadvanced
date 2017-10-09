$(document).ready(function(){

console.log("🍪   🍪   🍪   🍪   🍪   🍪   🍪  🍪   🍪   🍪   🍪\n🍪   🍪   🍪   🍪   JS Cookies   🍪   🍪   🍪   🍪\n🍪   🍪   🍪   🍪   🍪   🍪   🍪  🍪   🍪   🍪   🍪");

var allCircles =  [],
    circle     =  '<div class="circle" />';

if(Cookies.getJSON('circles')){ 

    var existingCircles = Cookies.getJSON('circles'); 

        /* Now we want to iterate through our retrieved array and output each value */
        
        for (var i = 0; i < existingCircles.length; i++) { // for loop that appends each circle to the DOM

            $(".circle-container").append(existingCircles[i]); 

        }

        /* We also want to append a new value to the cookie's array on each visit (i.e. adding a circle with reach reload) */
        existingCircles.push(circle); //pushes the new circle to the retrieved array

        Cookies.set('circles', existingCircles, { expires: 10}); // resets the cookie with the updated array

        }

else{ // if the cookie doesn't already exist

    allCircles.push(circle); //push the first 'circle' to an array
    

    Cookies.set('circles', allCircles, {expires: 10}); // set the cookie 'circles', define its value, and its expiration date

}

