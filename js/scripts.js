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

	function prevSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");	
		firstItem.before(lastItem);
		carouselList.css({marginLeft: '-500px'});
		carouselList.animate({marginLeft: '0'});
	};

	function nextSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");	
		carouselList.animate({'marginLeft': -500}, moveFirstSlide);		
	};

	prev.on('click', prevSlide);
	next.on('click', nextSlide);

/*	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");		
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	};


	function prevSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		carouselList.css({marginLeft: '-500'});
		carouselList.animate({'marginLeft': '0'}, 500);
		firstItem.before(lastItem);

	};

	
	function nextSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft: '0'});
		carouselList.animate({'marginLeft': '-500'}, 500);
	};


	next.on('click', nextSlide);
	prev.on('click', prevSlide);
*/

});



