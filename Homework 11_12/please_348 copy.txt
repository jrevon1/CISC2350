// Jordan Revon - Homework 7 due 11/12/2020

window.onload = function(){
document.getElementById("touchdown").onclick = computeplay;
document.getElementById("fieldgoal").onclick = computeplay;
document.getElementById("safety").onclick = computeplay;
document.getElementById("extrapoint").onclick = computeplay;
};

// Computes proper total amount based on the play and existing total.

// Declaring variables to accumulate touchdowns, field goals, safety/2pt
//  conversions, and extra point attempts, respectively
var tdaccum = 0;
var fgaccum = 0;
var saf2ptaccum = 0;
var pataccum = 0;
// Declaring variable to accumulate total score (touchdowns + field goals+
//  safety/2 point conversions + extra point attempts)
var accum = 0;
function computeplay()
{
  // Declaring variable to get an integer value from a string in the invoking
  // object's HTML text
  var playadd= parseInt(this.innerHTML);
  // Add that value to the total score accumulator variable
  accum +=playadd;
  // Declaring variable to get the location of the "scorefinal" element
  var interim =document.getElementById("scorefinal");
  // Display the value of the total score accumulator variable in "scorefinal"
  interim.value = accum;

  // Multi-way "if" statement to keep track of individual scoring events
  // If "playadd"'s value is the same as the "touchdown" element's, i.e. "6"
  if(playadd == parseInt(document.getElementById("touchdown").innerHTML))
  {
    // Add that value to the touchdown accumulator
    tdaccum += playadd;
  }
  // If "playadd"'s value is the same as the "fieldgoal" element's, i.e. "3"
  else if(playadd == parseInt(document.getElementById("fieldgoal").innerHTML))
  {
    // Add that value to the field goal accumulator
    fgaccum += playadd;
  }
  // If "playadd"'s value is the same as the "safety" element's, i.e. "2"
  else if(playadd == parseInt(document.getElementById("safety").innerHTML))
  {
    // Add that value to the safety/2pt accumulator
    saf2ptaccum += playadd;
  }
  // If "playadd"'s value is the same as the "extrapoint" element's, i.e. "1"
  else if(playadd == parseInt(document.getElementById("extrapoint").innerHTML))
  {
    // Add that value to the extra point accumulator
    pataccum += playadd;
  }

  // Declaring variable to get the location of the "touchdowncount" element
  var tdcount = document.getElementById("touchdowncount");
  // Display the value of the touchdown count accumulator variable in the
  //  "touchdowncount" element
  tdcount.value = tdaccum;

  // Declaring variable to get the location of the "fieldgoalcount" element
  var fgcount = document.getElementById("fieldgoalcount");
  // Display the value of the field goal count accumulator variable in the
  //  "fieldgoalcount" element
  fgcount.value = fgaccum;

  // Declaring variable to get the location of the "safetycount" element
  var saf2ptcount = document.getElementById("safetycount");
  // Display the value of the safety count accumulator variable in the
  //  "safetycount" element
  saf2ptcount.value = saf2ptaccum;

  // Declaring variable to get the location of the "extrapointcount" element
  var patcount = document.getElementById("extrapointcount");
  // Display the value of the extra point count accumulator variable in the
  //  "extrapointcount" element
  patcount.value = pataccum;

}
