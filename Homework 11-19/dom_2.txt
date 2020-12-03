/* Homework 8 for CISC2350 - Jordan Revon 11/19/2020 */

window.onload = function()
{
  document.getElementById("searchbutton").onclick = searchClick; 
};

// Counter variable to track when the each search is performed
var searchCounter = 1;
// Counter variable to track the number of times the second search was found
var foundCounter = 1;
// Variable to store the second search's phrase
var secondSearch = '';

// Called when the Search button is clicked.
// Looks for paragraphs matching a search string and highlights them. 
function searchClick()
{
	var searchPhrase = document.getElementById("searchtext").value;
	var main = document.getElementById("main");
	// Now searches all "li" elements within "main"
	var mainParas = main.getElementsByTagName("li");
	var spanText = document.createElement("SPAN");
	var spanPlace = document.getElementById("search");
	spanText.id = "found";
	spanPlace.appendChild(spanText);
	// Variable to store the location of the span tab
	var foundText = document.getElementById("found");


	// For-loop to iterate through each li element
	for (var i = 0; i < mainParas.length; i++) 
	{
		if (mainParas[i].innerHTML.indexOf(searchPhrase) >= 0)
		{ 
			mainParas[i].className = "highlighted"; // highlight
			// If searchCounter is 2, i.e. the search button has been clicked a second time
			if(searchCounter == 2)
			{
				// Copy the searchPhrase to secondSearch
				secondSearch = searchPhrase;
				// Display the saved secondSearch in addition to the number of times it was found, foundCounter
				foundText.innerHTML = "How Many Times I searched for The word " + secondSearch + " " + foundCounter;
				// Increment the foundCounter for later
				foundCounter++;
			}
			// If searchCounter is 3 or greater (for subsequent searches after the second)
			else if(searchCounter >= 3)
			{
				// And if the searchPhrase is the same as the saved secondSearch phrase
				if(searchPhrase == secondSearch)
				{
					// Display the saved secondSearch in addition to the number of times it was found, foundCounter
					foundText.innerHTML = "How Many Times I searched for The word " + secondSearch + " " + foundCounter;
					// Increment foundCounter to be displayed for subsequent searches
					foundCounter++;
				}
				// Otherwise break out of the block of code
				else
				{
					break;
				}
			}
		}
		else
		{
			mainParas[i].className = null;	// un-highlight
		}
	// Increment searchCounter after every button click to keep track of the number of total searches
	}
	searchCounter++;
}


