import $ from "jquery";
import is from "is_js";
import {Swiper, Navigation} from "swiper/dist/js/swiper.esm.js";

Swiper.use([
	Navigation,
]);

$(_ => {
	let sliders = document.querySelectorAll(".team-slider .swiper-list");

	for (let slider of sliders){
		let pagination = {
			el: slider.querySelector(".swiper-pagination"),
			type: "bullets",
			clickable: true,
			dynamicBullets: true,
		};

		new Swiper(slider, {
			slidesPerView: 4,
			spaceBetween: 30,
			roundLengths: true,
			loopFillGroupWithBlank: true,
			navigation: {
				prevEl: slider.closest(".team-slider").querySelector(".slick-prev"),
				nextEl: slider.closest(".team-slider").querySelector(".slick-next")
			},
			watchOverflow: true,
			breakpoints: {
				1280: {
					navigation: !is.mobile(),
					pagination: pagination,
					spaceBetween: 25
				},
				1000: {
					navigation: !is.mobile(),
					spaceBetween: 18,
					slidesPerView: 3,
					pagination: pagination,
				},
				660: {
					navigation: !is.mobile(),
					spaceBetween: 16,
					slidesPerView: 2,
					pagination: pagination,
				},
				380: {
					navigation: !is.mobile(),
					spaceBetween: 16,
					slidesPerView: 1,
					pagination: pagination,
				}
			}
		})
	}
});