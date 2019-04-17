import $ from "jquery";

import "jquery-ui/ui/widgets/slider.js";

require("jquery-ui/themes/base/slider.css");

$(_ => {
	$(".price-filter").each((i, el) => {
		let $this = $(el);

		let $range = $this.find(".range"),
			$min = $this.find("input[data-min]"),
			$max = $this.find("input[data-max]");

		let min = parseInt($min.attr("data-min")),
			max = parseInt($max.attr("data-max"));

		$range.slider({
			animate: "normal",
			min: min,
			max: max,
			values: [
				$min.val(), 
				$max.val()
			],
			range: true,
			step: 10,
			slide: (e, ui) =>{
				$min.val(parseInt(ui.values[0]));
				$max.val(parseInt(ui.values[1]));
			}
		});

		$this.find(".price-filter__input").on("keyup", function(){
			let id, val;

			if ($(this).attr("data-min")){
				id = 0;
				val = (+$(this).val() < min ? min : +$(this).val());
			}else{
				id = 1;
					val = (+$(this).val() > max ? max : +$(this).val());
			}

			$range.slider("values", id, parseInt(val));
		});
	});
})