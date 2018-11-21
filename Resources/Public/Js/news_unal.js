$(function() {
	$(".carousel-news-item").each(function( index ) {

		imageUrl=$(this).data('imageurl');

		if(imageUrl!=""){
			$(this).css("background","url('"+imageUrl+"')")
		}
		
	});

	$('.carousel').carousel({
	  interval: 1000 * 10
	});
});
