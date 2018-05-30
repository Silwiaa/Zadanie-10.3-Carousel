$(function() { 
    var carouselList = $('#carousel ul'),
        dots = $('.dots ul');
        
	//change slide
    setInterval(changeSlide, 4000);
    
    function changeSlide() {
        carouselList.animate({'marginLeft': -600}, 1000, moveFirstSlide);
    }
    
    //move first slide
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first'),
            lastItem = carouselList.find('li:last');
        
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
});