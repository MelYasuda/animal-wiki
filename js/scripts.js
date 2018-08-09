$(document).ready(function(){
	$("h2").click(function(){
  if ($(this).hasClass('panda')) {
      $("p#panda").show();
			$("img.panda").show();
    } else {
    	$("p#panda").hide();
			$("img.panda").hide();
    }

     if ($(this).hasClass('dog')) {
      $("p#dog").show();
			$("img.dog").show();
    } else {
    	$("p#dog").hide();
			$("img.dog").hide();
    }

        if ($(this).hasClass('bear')) {
      $("p#bear").show();
			$("img.bear").show();
    } else {
    	$("p#bear").hide();
			$("img.bear").hide();
    }
  });
});
