$(function() { 
    var carouselList = $('#carousel ul');
    
	//Change slide
    setInterval(changeSlide, 3000); 
    function changeSlide() {
        carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
    }
    
    //Move first slide
    function moveFirstSlide () {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }
});