window.onload = () => {
	let projects = document.querySelector('.projects');		
	let about = document.querySelector('.about');		
	let contact = document.querySelector('.contact');
	let closeBtn = document.querySelector('.close button');	

	let scrollToFixLinks = () => {
		let container = document.querySelector('.one');
		let links = document.querySelector('.links-container');
	
		window.onscroll = (event) => {
			if (this.pageYOffset > 445) {
				links.classList.add('fix-position');
				projects.classList.remove('visible');
				about.classList.remove('visible');
				contact.classList.remove('visible');
			} else {
				links.classList.remove('fix-position');
			}
		}
	}

	let showHiddenPage = () => {
		let linksContainer = document.querySelector('.links-container');

		linksContainer.addEventListener('click', (event) => {
			event.preventDefault();

			if (event.target.textContent === 'Projects') {
				projects.classList.add('visible');
				closeBtn.classList.add('visible');
				window.scrollTo(0,0);
				hidePopUpPage(projects);				
			}
			if (event.target.textContent === 'About') {
				about.classList.add('visible');
				closeBtn.classList.add('visible');
				window.scrollTo(0, 0);
				hidePopUpPage(about);				
			}
			if (event.target.textContent === 'Contact') {
				contact.classList.add('visible');
				closeBtn.classList.add('visible');
				window.scrollTo(0, 0);
				hidePopUpPage(contact);
			}
		});
	}

	let hidePopUpPage = (element) => {
		closeBtn.addEventListener('click', () => {
			element.classList.remove('visible');
			closeBtn.classList.remove('visible');
		})
	}

	scrollToFixLinks();
	showHiddenPage();
}
