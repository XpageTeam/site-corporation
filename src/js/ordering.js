document.addEventListener("DOMContentLoaded", e => {
	let titles = document.querySelectorAll(".od__title-cont");

	if (!titles.length)
		return

	for (var title of titles)
		title.addEventListener("click", function(){
			let parent = this.closest(".od");

			if (parent.classList.contains("js__opened"))
				parent.classList.remove("js__opened")
			else
				parent.classList.add("js__opened")
		})
})