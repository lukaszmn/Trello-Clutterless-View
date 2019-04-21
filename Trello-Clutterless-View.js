javascript:(function() {
	/* check status */
	const ATTR_NAME = 'clutterless-visible';
	const attr = document.body.getAttribute(ATTR_NAME);
	const shouldHide = attr == null || attr == 'false';
	document.body.setAttribute(ATTR_NAME, shouldHide);

	var elements = document.querySelectorAll('.list-card-details > .list-card-labels, .list-card-details > .badges, .list-card-details > .list-card-members, .list-card > .list-card-cover, .list-card > .list-card-stickers-area');
	if (elements.length) {
		
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


	/* hide Add Another List */
	var newList = document.querySelector('.js-add-list');
	if (newList) {
		newList.style.display = shouldHide ? 'none' : '';
	}

	/* hide empty lists */
	var lists = document.querySelectorAll('.js-list');
	for (list of lists) {
		if (shouldHide) {
			var cards = list.querySelectorAll('.list-cards > .list-card:not(.hide)');
			const hideList = (cards.length == 0);
			list.style.display = hideList ? 'none' : '';
		} else {
			list.style.display = '';
		}
	}
	
	/* hide Add Another Card */
	var links = document.querySelectorAll('.open-card-composer');
	for (link of links) {		
		link.style.display = shouldHide ? 'none' : '';
	}

})();
