$(function() {

	var carouselList = $("#carousel ul");
	var prev = $(".prev");
	var next = $(".next");

	setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft': -500}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
	   	lastItem.after(firstItem);
   		carouselList.css({marginLeft:0});
	};

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");		
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	};

	function slideRight() {
		carouselList.animate({'marginLeft': -500}, 500, moveFirstSlide);
	};
	
	function slideLeft() {
		carouselList.animate({'marginLeft': +500}, 500, moveLastSlide);
	};
	
	next.on('click', slideRight);
	prev.on('click', slideLeft);
	

});



