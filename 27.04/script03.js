
function keyHit(evt) {
	var myPix = new Array("images/slideImg0.jpg","images/slideImg1.jpg","images/slideImg2.jpg","images/slideImg3.jpg");
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;

	var thisKey = (evt) ? evt.which : window.event.keyCode; // brauseritüüpidele vastavaks viimine
	
	if (thisKey == ltArrow) {
		chgSlide(-1);
	}
	else if (thisKey == rtArrow) {
		chgSlide(1);
	}
	return false; // probleem Safaris

	function chgSlide(direction) {
		thisPic = thisPic + direction;
		if (thisPic > imgCt) {
			thisPic = 0;
		}
		if (thisPic < 0) {
			thisPic = imgCt;
		}
		document.getElementById("slideshow").src = myPix[thisPic];
	}
}
document.onkeydown = keyHit; // onkeydown sündmus (event)
var thisPic = 0;


