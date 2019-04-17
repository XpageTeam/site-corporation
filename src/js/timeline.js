import $ from "jquery";
import is from "is_js";
import Swiper from "swiper";

$(_ => {
	let timlineSlider = new Swiper(".timeline__slider", {
		slidesPerView: 3,
		freeMode: true,
		spaceBetween: 40,
		roundLengths: true,
		navigation: {
			prevEl: ".timeline__arrows .slick-prev",
			nextEl: ".timeline__arrows .slick-next"
		},
		watchOverflow: true,
		breakpoints: {
			1100: {
				spaceBetween: 20,
			},
			1000: {
				slidesPerView: 2,
				spaceBetween: 18,
			},
			660: {
				slidesPerView: "auto",
				spaceBetween: 16,
				navigation: !is.mobile(),
			}
		}
	});
})