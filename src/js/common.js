import $ from "jquery";
import is from "is_js"
import "slick-carousel";
import "selectize/dist/js/selectize.min.js";
// import "./toch-for-ui-slider.js";


import "./tabs.js";
import "./ordering.js";
import "./standart-page.js";
// import "./main-sliders.js";
// import "./countTo.js";
// import "./team.js";
// import "./timeline.js";
// import "./tovar.js";
// import "./range.js";
// import "./lc.js";
// import mobileMenu from "./mobile-menu.js";
import Sticky from "./x-widgets.js";

window.$ = $;
window.jQuery = $;


require("./slick.min.js");
require("jquery-ui/ui/widgets/slider.js");
// require("./countTo.js");
require("./jquery.fancybox.js");

if (!is.touchDevice())
	require("selectize/dist/css/selectize.css");

require("../css/jquery.fancybox.css");

require("jquery-ui/themes/base/slider.css");

document.addEventListener("DOMContentLoaded", e => {

	$("body").click(function(e){
		if (!$(e.target).is($(".mobile-menu"))
			&& !$(".mobile-menu").has(e.target).length
			&& $("body").hasClass("js__menu--open")
			&& !$(e.target).is($(".burger"))
			&& !$(".burger").has(e.target).length){
				$("body").removeClass("js__menu--open")
		}
	})

	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})





	$('.fancybox').fancybox({
		buttons : [
			'close'
			],
		touch: {
			vertical: false
		}
	});

	$('.nav__list').each(function(i,el){
		var $this = $(el);
		$this.find('ul').closest('li').addClass('js__has-menu')
	})



	let $standartSlider = $('.standart-slider__list').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendArrows: $('.standart-slider__arrow')

	})

	let $sliderOne = $('.slider-one .slider-block').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		appendArrows: $('.slider-one').find('.slider-arrow'),

	})

	let $sliderRowTwo = $('.slider-row-two .slider-block').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		rows: 2,
		appendArrows: $(".slider-row-two .slider-arrow"),
		responsive: [
			{
				breakpoint: 1500,
				settings: {
					rows: 1,
				},

			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					rows: 1,
				},

			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
					rows: 1,
				},

			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					rows: 1,
				},

			}
		]

	})


	$('.slider-one .slider-nav__link input[type="radio"]').on('change', function(){
		let value = $(this).val();

		$sliderOne.slick('slickUnfilter');

		$sliderOne.slick('slickFilter', function(id, slide){
			let $slide = $(slide);
			return +$slide.find("[data-id]").data("id") == value;
			filtered = false;
		})

	})

	$('.slider-row-two .slider-nav__link input[type="radio"]').on('change', function(){
		let value = $(this).val();

		$sliderRowTwo.slick('slickUnfilter');


		$sliderRowTwo.slick('slickFilter', function(id, slide){
			let $slide = $(slide);
			return +$slide.find("[data-id]").data("id") == value;
			filtered = false;
		})
	})

	$('.slider-nav .reset-filter').click(function(){
		$('.slider-nav input').prop('checked', false);
		$sliderOne.slick('slickUnfilter');
		$sliderRowTwo.slick('slickUnfilter');
	})

	let $sliderFourPhoto = $('.slider-four-photo .slider__block-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		appendArrows: $(".slider-four-photo .slider-arrow"),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
				},

			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				},

			}
		]

	})

	let $sliderTovar = $('.slider-tovar .slider__block-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		appendArrows: $(".slider-tovar .slider-arrow"),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},

			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				},

			},
		]

	})

	let $sliderTwo = $('.slider-two .slider__block-list').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		appendArrows: $(".slider-two .slider-arrow"),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
				}
			}
		]

	})

	let $sliderFourNoPhoto = $('.slider-four-no-photo .slider__block-list').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		appendArrows: $(".slider-four-no-photo .slider-arrow"),
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
				}
			},

		]

	})

	let $sliderTestemonials = $('.slider-testemonials .slider__block-list').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		appendArrows: $(".slider-testemonials .slider-arrow"),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
				}
			},

		]

	})

	let $sliderPartners = $('.slider-partners .slider__block-list').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		fade: false,
		infinite: false,
		appendArrows: $(".slider-partners .slider-arrow"),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 2,
				}
			},

		]

	})


	let $sliderCollection = $(".card__slider-main .card__slider-list"),
		$sliderCollectionNav = $(".card__slider-nav .card__slider-list");


	$sliderCollection.on('init', slick => {

	}).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.card__slider-nav .card__slider-list',
		fade: true,
		arrows: false,
		lazyLoad: 'progressive',
		centerMode: true,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 1100,
				settings: {

				}
			}
		]
	}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
		$sliderCollection.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
	}).on("afterChange", (e, slick, curSlide) => {
		$sliderCollection.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
	});



	$sliderCollectionNav.on('init', slick => {

	}).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.card__slider-main .card__slider-list',
		focusOnSelect: true,
		appendArrows: $('.card__slider-nav'),
		centerMode: true,
		centerPadding: 0,
		lazyLoad: 'progressive',
		responsive: [
			{
				breakpoint: 667,
				settings: {
					// slidesToShow: 2,
				}
			}
		]
	});

	$('.faq__item-top').click(function() {
		let $this = $(this);

		$this.closest('.faq__item').toggleClass('js__open');
		$this.next('.faq__item-bot').slideToggle();
	})


	$("body").on("change", ".forms__input--file", function(e){
		var value = $(this)[0].files[0].name;
		// console.log(value);
		var inputHasFile = $(this).next('input[type="text"]').val(value);

		if(inputHasFile.length){
			$(this).nextAll('.add-input').remove();
		}


	});

	$("body").on("click", ".input-del", function(){

		var $this = $(this);

		$this.closest('.forms__input-cont').remove();

	})


	// $('.forms__input-cont--file').each(function(i,el){
	// 	let $this = $(el);
	//
	//
	//
	// })

	$('body').on('click', '.add-input', function(){
		let $this = $(this);

		let inputFileclone = $this.closest('.forms__input-cont--file').clone();
		console.log(inputFileclone)

		let time = +new Date();

		inputFileclone.find('.forms__input--file').attr("id", time);
		inputFileclone.find('.forms__label--file').attr("for", time);

		$this.closest('.forms__input-cont--file').after(inputFileclone);

	})


	$('.testemonials-btn, .btn, .catalog__info-link-more').click(function(e){
		e.preventDefault();

		let $this = $(this);

		$this.closest('.testemonials__item').toggleClass('js__file--open');
		$this.closest('.testemonials__item').find('.testemonials__item-files').slideToggle();
		$this.closest('.catalog__item').toggleClass('js__open');
		$this.closest('.catalog__item').find('.catalog__info-dop--hidden').slideToggle();
	})




	$('.catalog__info-link-more, .testemonials__item .btn').click(function(){

		let $this = $(this);

		if($('.catalog__info-dop--hidden').length){
			if (!$(this).data('status')) {
				$(this).html('Cвернуть');
				$(this).data('status', true);
			} else {
				$(this).html('Развернуть');
				$(this).data('status', false);
			}

		}

	})


	$('.filter-block-title, .filter-block__title').click(function(){
		let $this = $(this);

		$this.next('div, ul').slideToggle();

	})







	var menuClone = $('.nav__list').clone();
	var street = $('.head-address').clone();
	var soc = $('.soc').clone();
	var city = $('.head-city').clone();
	var phone = $('.head-phone').clone();

	$('.mobile-menu').prepend(soc);
	$('.mobile-menu').prepend(phone);
	$('.mobile-menu').prepend(menuClone);
	$('.mobile-menu').prepend(street);
	$('.mobile-menu').prepend(city);


	$('.head-phone').click(function(){
		$(this).toggleClass('js__open');

		$(this).find('.tel-selects-wr').slideToggle();
	})


	if($(window).width() < 1200) {


        $('.nav__item.js__has-menu').each(function(i,el){
            var $this = $(el),
            	setCloneLink = $this.find('ul').prev('a').clone();

            console.log(setCloneLink)

            $this.find('ul').prepend('<li class="head-menu__item js__link-parent"></li>');
            $this.find('.js__link-parent').prepend(setCloneLink);
            $this.find('ul').prepend('<div class="head-menu__item js__back">Назад</div>');

        })

        $('.nav__item.js__has-menu > a').removeAttr('href');
        $('.nav__item.js__has-menu > a').click(function(){
            var $this = $(this);
            $this.closest('body').addClass('js__submenu--open');

	    })

        $('.js__back').click(function(){
            var $this = $(this);
            $this.closest('body').removeClass('js__submenu--open');
        })

	   }


	$(".price-filter").each((i, el)=>{
		var $this = $(el);

		var step = +$this.attr("data-step"),
			$min = $this.find("input[data-min]"),
			$max = $this.find("input[data-max]");

		var min = +$min.attr("data-min"),
			max = +$max.attr("data-max");

		var $range = $this.find(".range").slider({
			animate: "normal",
			min: min,
			max: max,
			values: [$min.val(), $max.val()],
			range: true,
			step: step,
			slide: (e, ui) =>{
				$min.val(ui.values[0]);
				$max.val(ui.values[1]);
			},
			change(e, ui){
				smartFilter.reload($min[0])
			},
		});

		$this.find("input[type='tel']").on("keyup", function(){
			var id, val;

			if ($(this).attr("data-min")){
				id = 0;
				val = (+$(this).val() < min ? min : +$(this).val());
			}else if ($(this).attr("data-max")){
				id = 1;
				val = (+$(this).val() > max ? max : +$(this).val());
			}

			$range.slider("values", id, val);
		})
	});


	if (is.desktop()){
		$("select:not(.no-selectize)").each((i, el) => {
			let $select = $(el);

			$select.selectize({
				placeholder: $select.closest("div").data("placeholder") || $select.data("placeholder") || "",
				closeAfterSelect: true,
				onChange(){
					$(".selectize-input input").blur()
				}
			});
		});

	}





		let $mainSlider = $('.main-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			infinite: true,
			dots: true,
			fade: true,
			// autoplay: true,
			autoplaySpeed: 1000,
			appendArrows: $(".main-slider-arrow .wrapper"),
			responsive: [
				{
					breakpoint: 660,
					settings: {
						arrows: false,

					}
				}
			]

		}).on("beforeChange", (e, slick, curSlide, nextSlide) => {
			$mainSlider.find(".slick-slide:eq("+curSlide+")").removeClass('js__active-slide');
		}).on("afterChange", (e, slick, curSlide) => {
			$mainSlider.find(".slick-slide:eq("+curSlide+")").addClass('js__active-slide');
		});;







		// $('.slider-nav').find('.btn').addClass('js__active');


		// if(!$('.slider-nav__list').hasClass('js__open')){

		// 	if($(window).width() < 1000){
		// 		$('.slider-nav__list').click(function(){
		// 				var $this = $(this);
		// 				$this.closest('.slider-nav__list').toggleClass('js__open');
		// 		})
		// 	}
		// }


		// $('.slider-nav__list > *').click(function(){

		// 	if($(window).width() < 1000){

		// 		var $this = $(this);

		// 		$('.slider-nav__item').removeClass('js__active');
		// 		$this.addClass('js__active');

		// 	}
		// })



});
