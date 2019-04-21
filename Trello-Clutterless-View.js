javascript:(function() {
	var elements = document.querySelectorAll('.list-card-details > .list-card-labels, .list-card-details > .badges, .list-card-details > .list-card-members, .list-card > .list-card-cover, .list-card > .list-card-stickers-area');
	if (elements.length) {
		const elDisplay = elements[0].style.display;
		const shouldHide = elDisplay == undefined || elDisplay == 'block' || elDisplay == '';
		
		/* remove labels, badges, members, images, stickers */
		for (elem of elements) {
			elem.style.display = shouldHide ? 'none' : '';
		}
		
		/* fix margin for cards with stickers */
		var elements = document.querySelectorAll('.list-card > .list-card-details');
		for (elem of elements) {
			if (shouldHide) {
				elem.style.marginTop = '0';
			} else {
				elem.style.marginTop = '';
			}
		}

		/* decrease bottom padding in cards */
		var elements = document.querySelectorAll('.list-card-details > .list-card-title');
		for (elem of elements) {
			if (shouldHide) {
				elem.style.prevmargin = elem.style.margin;
				elem.style.margin = '0';
			} else {
				elem.style.margin = elem.style.prevmargin;
			}
		}

		/* decrease space between cards */
		var elements = document.querySelectorAll('.list-card');
		for (elem of elements) {
			if (shouldHide) {
				elem.style.prevmarginBottom = elem.style.marginBottom;
				elem.style.marginBottom = '4px';
			} else {
				elem.style.marginBottom = elem.style.prevmarginBottom;
			}
		}
	}
})();

// TODO - can we just change CSS styles?
