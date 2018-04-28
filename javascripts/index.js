window.onload = () => {
	let scrollToFixLinks = () => {
		let container = document.querySelector('.one');
		let links = document.querySelector('.links-container')
	
		window.onscroll = (event) => {
			if (this.pageYOffset > 445) {
				links.classList.add('fix-position');
			} else {
				links.classList.remove('fix-position');
			}
		}
	}

	let showHiddenPage = () => {
		let linksContainer = document.querySelector('.links-container');

		linksContainer.addEventListener('click', (event) => {
			event.preventDefault();
		});
	}

	scrollToFixLinks();
	showHiddenPage();
}
