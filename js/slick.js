window.addEventListener ("load",(event)=> {
	$('.left-arrow').click(function(e){
		e.preventDefault();
	  	$('.multiple-items').slick('slickPrev');
	});
	$('.right-arrow').click(function(e){
		e.preventDefault();
	  	$('.multiple-items').slick('slickNext');
	});
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
      	infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      	infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
});