// Converts a name in first-last order to last-first order.

function convertName()
{
  var input = document.getElementById("name");
  var name = input.value;
  var spaceIndex = name.indexOf(" ");
  var firstName = name.substring(0, spaceIndex);
  var lastName = name.substring(spaceIndex + 1);

  /* lastName = lastName.toUpperCase();*/

  var firstInitial = firstName.charAt(0);
  input.value = lastName + ", " + firstInitial;


  objspan = document.getElementById("span1");

  var  s = " ";
  for ( var k= 0; k <  firstName.length ; k++)
  {
    if (k % 2 == 0)
    {
      var position =  firstName.length - k -1 ;
      var smid =  firstName.charAt(position);
      s = s + smid;
    }
  }

  var s1 = " ";
  for ( var k= 0; k < lastName.length  ; k++)
  {
    if (k % 2 == 0)
    {
      var position =  lastName.length - k -1 ;
      var s1mid = lastName.charAt(position);
      s1 = s1 + s1mid;
    }
  }

  objspan.innerHTML =   s+ s1 ;
}

// Converts a name in "First M. Last" format to "F.M.L."
function convertInitials()
{
  // variable to get and store the "name2" element
  var input = document.getElementById("name2");
  // variable to store the string within the "name2" element
  var name2 = input.value;
  // variable to get the index of the first space in "name2"
  var spaceIndex = name2.indexOf(" ");
  // variable to get the index of the first period in "name2"
  var periodIndex = name2.indexOf(".")
  // variable to store the first name, starting at the 0 index
  //  and stopping at the first space's index
  var firstName = name2.substring(0, spaceIndex);
  // variable to store the middle name/initial, starting at the index
  //  after the first space and stopping at the first period's index
  var middleName = name2.substring(spaceIndex + 1, periodIndex);
  // variable to store the last name, starting at the index two (2)
  //  positions after the first period's index
  var lastName = name2.substring(periodIndex + 2);

  // variable to store the value at the first index of firstname
  var firstInit = firstName.charAt(0);
  // variable to store the value at the first index of middlename
  var midInit =  middleName.charAt(0);
  // variable to store the value of the first index of lastname
  var lastInit = lastName.charAt(0);

  // variable to get and store the "span2" element
  var objspan = document.getElementById("span2");
  // set and display the value of "objspan" to "firstInit.midInit.lastInit"
  objspan.innerHTML = firstInit + "." + midInit + "." + lastInit + ".";

}

// load the functions when the entire page loads
window.onload = function()
{
  // linking the onclick event to "clickButton"
  var button = document.getElementById("clickButton");
  // clicking "clickButton" will run convertName()
  button.onclick = convertName;

  // linking the onclick event to "clickButton2"
  var button2 = document.getElementById("clickButton2");
  // clicking "clickButton2" will run convertInitials()
  button2.onclick = convertInitials;
}
