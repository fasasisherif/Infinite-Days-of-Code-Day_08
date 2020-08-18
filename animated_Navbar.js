let diffSections = document.querySelectorAll("section")
let hamburger = document.querySelector(".hamburger")
let openNavCount = 0

const animateHomeNav = () => {
		openNavCount++
		hamburger.innerText ="X"
		
		diffSections[0].style.animation= "animateNav .3s ease forwards"
	 diffSections[1].style.animation= "animateHome .4s ease forwards"
	 diffSections[2].style.animation= "animateServices .4s ease forwards"
	 diffSections[3].style.animation= "animateAbout .4s ease forwards"
	 diffSections[4].style.animation= "animateContact .4s ease forwards"

		
if(openNavCount%2 == 0){
		hamburger.innerHTML ="&#9776"
		
		diffSections[0].style.animation= "animateCloseNav .3s ease forwards"
	 diffSections[1].style.animation= "animateCloseHome .4s ease forwards"
	 diffSections[2].style.animation= "animateCloseServices .4s ease forwards"
	 diffSections[3].style.animation= "animateCloseAbout .4s ease forwards"
	 diffSections[4].style.animation= "animateCloseContact .4s ease forwards"

	  	}		
  }

hamburger.addEventListener("click", animateHomeNav)
