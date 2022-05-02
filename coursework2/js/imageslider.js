var i = 0;
var photos = [];	 // NOTE: Here I made variables for the start point, image array and time between the switch of images.
var time = 2000;

// NOTE: below is my list of 9images, They had to be internet links due to java script running on the browser
photos[0] = "https://s3-us-west-2.amazonaws.com/onestowatch-assets/kennyhoopla-the-world-is-flat_1584041998.jpeg";
photos[1] = "https://diy-magazine.s3.amazonaws.com/d/diy/Artists/K/KennyHoopla/_1152x768_crop_center-center_61_line/1Q4A7077.jpg.webp";
photos[2] = "https://media.altpress.com/uploads/2020/05/kennyhoopla-2020.jpg";


// NOTE: here I created a function to change the images
function changeImg(){
	document.slide.src = photos[i];

	// Check If Index Is Under Max
	if(i < photos.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every 2 seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
