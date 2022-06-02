
$( window ).resize(function() {
	  if($(window).width()<499){
		  $('#side').hide();
		  $('#footer').html($('#side').html());
	  }else {
		  $('#side').show();
		  $('#footer').html("");
		  
	  }
	  
	});