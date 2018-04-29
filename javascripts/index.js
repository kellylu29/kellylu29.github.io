window.onload = () => {
	let projects = document.querySelector('.projects');		
	let about = document.querySelector('.about');		
	let contact = document.querySelector('.contact');
	let closeBtn = document.querySelector('.close button');	

	let scrollToPositionLinks = () => {
		let container = document.querySelector('.one');
		let links = document.querySelector('.links-container');
	
		window.onscroll = (event) => {
			if (this.pageYOffset > 445) {
				links.classList.add('fix-position');
				removeVisibility(projects);
				removeVisibility(about);
				removeVisibility(contact);
				removeVisibility(closeBtn);
			} else {
				links.classList.remove('fix-position');
			}
		}
	}

	let showPopUpPage = () => {
		let linksContainer = document.querySelector('.links-container');

		linksContainer.addEventListener('click', (event) => {
			event.preventDefault();

			if (event.target.textContent === 'Projects') {
				addVisibility(projects);
				addVisibility(closeBtn);
				window.scrollTo(0,0);
				hidePopUpPage(projects);				
			}
			if (event.target.textContent === 'About') {
				addVisibility(about);
				addVisibility(closeBtn);
				window.scrollTo(0, 0);
				hidePopUpPage(about);				
			}
			if (event.target.textContent === 'Contact') {
				addVisibility(contact);
				addVisibility(closeBtn);
				window.scrollTo(0, 0);
				hidePopUpPage(contact);
			}
		});
	}

	let hidePopUpPage = (element) => {
		closeBtn.addEventListener('click', () => {
			removeVisibility(element);
			removeVisibility(closeBtn);
		})
	}

	let addVisibility = (node) => {
		node.classList.add('visible');
	}

	let removeVisibility = (node) => {
		node.classList.remove('visible');
	}

	scrollToPositionLinks();
	showPopUpPage();
}
