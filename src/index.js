import './style.css';

// show which section is viewed in menu bar with active link


const sections = document.querySelectorAll("section")
const links = document.querySelectorAll("nav ul li a") 

const green = document.querySelector(".green")


document.addEventListener("scroll", function () {

	sections.forEach(section => {
		if (pageYOffset >= (section.offsetTop - (section.offsetHeight / 2))) {
			links.forEach(link => {
				link.classList.remove("active")
				if (link.innerHTML.toLowerCase() === section.id){ //.getAttribute("href") would get #color
					link.classList.add("active")
				}
			})
		}
	})



	if (pageYOffset > green.offsetTop) {
		const x = 1 - (pageYOffset - green.offsetTop) * 0.0005 
		green.style.transform = `scale(${x})`
		// const width = screen.width - 0.5 * (pageYOffset - green.offsetTop)
		// green.style.width = width + "px"
	} else {
		green.style.transform = "none"
	}


})


