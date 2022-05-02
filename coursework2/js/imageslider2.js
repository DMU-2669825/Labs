var i = 0;
var photos = [];	 // NOTE: Here I made variables for the start point, image array and time between the switch of images.
var time = 2500;

// NOTE: below is my list of images, They had to be internet links due to java script running on the browser

photos[0] = "https://i1.sndcdn.com/artworks-lk9nHkhBanUl-0-t500x500.jpg";
photos[1] = "https://www.fashionably-early.com/wp-content/uploads/2020/02/how-will-i-rest-in-peace.jpg";



// NOTE: here I created a function to change the images
function changeImg(){
	document.slide2.src = photos[i];

	// Check If Index Is Under Max
	if(i < photos.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every 2.5 seconds
	setTimeout("changeImg()", time);
}

// Run function when the page loads
window.onload=changeImg;
