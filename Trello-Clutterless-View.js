javascript:(function() {
	/* check status */
	const ATTR_NAME = 'clutterless-visible';
	const attr = document.body.getAttribute(ATTR_NAME);
	const shouldHide = attr == null || attr === 'false';
	document.body.setAttribute(ATTR_NAME, shouldHide);

	let elements = document.querySelectorAll('.list-card-details > .list-card-labels, .list-card-details > .badges, .list-card-details > .list-card-members, .list-card > .list-card-cover, .list-card > .list-card-stickers-area');
	if (elements.length) {
		
		/* remove labels, badges, members, images, stickers */
		for (const elem of elements) {
			elem.style.display = shouldHide ? 'none' : '';
		}
		
		/* fix margin for cards with stickers */
		elements = document.querySelectorAll('.list-card > .list-card-details');
		for (const elem of elements) {
			if (shouldHide) {
				elem.style.marginTop = '0';
			} else {
				elem.style.marginTop = '';
			}
		}

		/* decrease bottom padding in cards */
		elements = document.querySelectorAll('.list-card-details > .list-card-title');
		for (const elem of elements) {
			if (shouldHide) {
				elem.style.prevmargin = elem.style.margin;
				elem.style.margin = '0';
			} else {
				elem.style.margin = elem.style.prevmargin;
			}
		}

		/* decrease space between cards */
		elements = document.querySelectorAll('.list-card');
		for (const elem of elements) {
			if (shouldHide) {
				elem.style.prevmarginBottom = elem.style.marginBottom;
				elem.style.marginBottom = '4px';
			} else {
				elem.style.marginBottom = elem.style.prevmarginBottom;
			}
		}
	}


	/* hide Add Another List */
	const newList = document.querySelector('.js-add-list');
	if (newList) {
		newList.style.display = shouldHide ? 'none' : '';
	}

	/* hide empty lists */
	const lists = document.querySelectorAll('.js-list');
	for (const list of lists) {
		if (shouldHide) {
			const cards = list.querySelectorAll('.list-cards > .list-card:not(.hide)');
			const hideList = (cards.length === 0);
			list.style.display = hideList ? 'none' : '';
		} else {
			list.style.display = '';
		}
	}
	
	/* hide Add Another Card */
	const links = document.querySelectorAll('.open-card-composer');
	for (const link of links) {		
		link.style.display = shouldHide ? 'none' : '';
	}

})();