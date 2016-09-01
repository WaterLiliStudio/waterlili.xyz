$().ready(function () {


	// console.log();
	var current_access_nav_index;

	function index(current, obj){ 
		for (var i = 0; i < obj.length; i++) { 
			if (obj[i] == current) { 
				return i; 
			} 
		} 
	} 

	$(".div_lis_head").bind("mouseover", function () {
		current_access_nav_index = index(this, $(".div_lis_head"));
		// nav_ul turn green.
		$(".nav_ul:eq("+ current_access_nav_index +")").stop().animate({backgroundColor: 'rgba(129, 179, 58, 1)'}, 10);
	})

	$(".div_lis_head").bind("mouseout", function () {
		$(".nav_ul:eq("+ current_access_nav_index +")").stop().animate({backgroundColor: 'rgba(129, 179, 58, 0)'}, 'fast');
	})
})