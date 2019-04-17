import $ from "jquery";

window.XWidgets = {};

const Sticky = (object, maxHeight = $(window).height() - 40) => {

	if (!Array.isArray(window.XWidgets.Sticky))
		window.XWidgets.Sticky = new Array();

	$(object).each((i, el) => {
		el.stickyWidget = {
			func: this,
			maxHeight: maxHeight,
			positionBefore: el.style.position,
		};

		let $this = $(el);

		window.XWidgets.Sticky.push($this);
	});

	let stickyUpdateTimeout;
	$(window).on("load resize", e => {
		clearTimeout(stickyUpdateTimeout);

		if (window.XWidgets.Sticky)
			stickyUpdateTimeout = setTimeout(_ => {
				for (let $object of window.XWidgets.Sticky){

					if ($object.height() <= $(window).height() - 40)
						$object.css({
							position: "sticky",
						});
					else{
						$object.css({
							position: $object[0].stickyWidget.positionBefore,
						});
					}
				}
			}, 200);
	});
};

export default Sticky;