//declare variables
var imgArray = [],
	imgName = "",
	numImgs = 6, //number of images in gallery
	imgIndex = 0, 
	mainImg = document.getElementById('mainImg'),
	rArrow = document.getElementById('nextArrow'),
	lArrow = document.getElementById('prevArrow'); 

//load imgArray
for(var i = 1; i <= numImgs; i++ ){
	imgName = "_images/gallery/sf_" + i + ".jpeg";
	imgArray.push(imgName);
}

//functions that advance and reverse photos
function nextPhoto(){
	imgIndex++;
	if(imgIndex >= imgArray.length){
		imgIndex = 0;
	}
	mainImg.setAttribute('src', imgArray[imgIndex]);
}

function prevPhoto(){
	imgIndex--;
	if(imgIndex < 0){
		imgIndex = imgArray.length -1;
	}
	mainImg.setAttribute('src', imgArray[imgIndex]);
}

//add click events to arrows
rArrow.onclick = function(){nextPhoto()};
lArrow.onclick = function(){prevPhoto()};