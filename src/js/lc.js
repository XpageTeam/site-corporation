import $ from "jquery";

$(_ => {
	$(".orders-desc__list-toggle").click(function(e){
		e.preventDefault();
		
		let $prev = $(this).prev(".orders-desc__list");

		$prev.toggleClass("js__opened");
	});
});