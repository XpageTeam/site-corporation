document.addEventListener("DOMContentLoaded", e => {
	$(".text-page table").wrap('<div class="table-wrap"><div class="table-wrap__track"></div></div>')

	$(".table-wrap")
		.prepend('<div class="table-wrap__shadow table-wrap__shadow--left"></div>')
		.append('<div class="table-wrap__shadow table-wrap__shadow--right"></div>')

	let tableWrapTracks = document.querySelectorAll(".table-wrap__track");

	if (!tableWrapTracks.length)
		return

	for (var track of tableWrapTracks){
		
		if (track.scrollWidth > track.clientWidth){
			let wrap = track.closest(".table-wrap");

			let shadows = {
				right: wrap.querySelector(".table-wrap__shadow--right")
			};

			setShadowOpacity(shadows.right, track.scrollWidth - track.clientWidth)
		}

		track.addEventListener("scroll", function(e){
			let wrap = this.closest(".table-wrap");

			let shadows = {
				left: wrap.querySelector(".table-wrap__shadow--left"),
				right: wrap.querySelector(".table-wrap__shadow--right")
			};

			setShadowOpacity(shadows.right, this.scrollWidth - this.clientWidth - this.scrollLeft)
			setShadowOpacity(shadows.left, this.scrollLeft)
		})
	}
})

const setShadowOpacity = (element, scrollWidth, offsetWidth = 30) => {
	element.style.opacity = scrollWidth / offsetWidth <= 1 ? scrollWidth / offsetWidth : 1
}