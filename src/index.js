import './style.css';

const sections = document.querySelectorAll("section")
const links = document.querySelectorAll("nav ul li a") 
document.addEventListener("scroll", function () {

	sections.forEach(section => {
		if (pageYOffset >= (section.offsetTop - (section.offsetHeight / 2.5))) {
			links.forEach(link => {
				link.classList.remove("active")
				if (link.innerHTML.toLowerCase() === section.id){ //.getAttribute("href") would get #color
					link.classList.add("active")
				}
			})
		}
	})
})

links.forEach(link => {
	link.addEventListener("click", function () {
		console.log(link.innerHTML.toLowerCase()) //.getAttribute("href") would get #color
	})
})