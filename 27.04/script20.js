document.onkeydown = keyHit; // onkeydown sündmus (event)
var thisPic = 0;

function keyHit(evt) {
	var myPix = new Array("images/callisto.jpg","images/europa.jpg","images/io.jpg","images/ganymede.jpg");
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
		document.getElementById("myPicture").src = myPix[thisPic];
	}
}
document.onkeydown = keyHit; // onkeydown sündmus (event)
var thisPic = 0;

