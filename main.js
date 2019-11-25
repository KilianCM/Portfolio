document.addEventListener("DOMContentLoaded", function() {
	let body = document.querySelector("body");
	let html = document.querySelector("html");
	//
	//projects
	let cardsProjects = document.querySelectorAll(".card");
	
	///// CALLS /////
	AOS.init();
	displayModalProjects();
	slideWithMouse();

	///// FUNCTIONS /////

	function displayModalProjects(){
		for (let i = 0; i < cardsProjects.length; ++i) {
			cardsProjects[i].addEventListener('click',function(e){
				e.preventDefault(); 
				let id = cardsProjects[i].getAttribute('id');
				if(projectsData[id] != null && typeof projectsData[id] != undefined){
					let modal = createModal(id);
					modal.open();
					Glider(document.querySelector(".glider")).refresh();
					modal.checkOverflow();
				}
			});
		}
	}

	//Build modal with project information
	function createModal(id){
		let modal = new tingle.modal({
		    closeMethods: ['overlay', 'button', 'escape'],
		    closeLabel: "Close",
		    cssClass: ['modal'],
		    beforeClose: function() {
				return true;
		    }
		});
		let project = projectsData[id];
		let divTechnos = "<div class='technos'><ul class='technosList'>";
		for(let i=0; i<project.technos.length;i++){
			divTechnos += "<li>" + project.technos[i] + "</li>";
		}
		divTechnos += "</ul></div>";

		divGlider = "";

		if(project.images.length > 0){
			divGlider = `<div class="glider-contain">
									<div class="glider">`;

			for(let j=0;j<project.images.length;j++){
				divGlider += "<div><img alt=\"" + project.name + "\" src=\"images/" + projectsData[id].images[j] +"\"></div>";
			}

			divGlider += `</div>
									<button role="button" aria-label="Previous" class="glider-prev">«</button>
									<button role="button" aria-label="Next" class="glider-next">»</button>
									<div role="tablist" id="dots"></div>
								</div>`;
		}
	
		modal.setContent('<h1>'+ project.name + '</h1>' +
						'<h3>'+ project.subname + '</h3>' +  
						'<p>' + project.description + '</p>' +
						divTechnos + divGlider
						 );
		
		if(divGlider != ""){
			new Glider(document.querySelector('.glider'), {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: '#dots',
				draggable: true,
				arrows: {
					prev: '.glider-prev',
					next: '.glider-next'
				},
				responsive: [
					{
						breakpoint: 1000,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}
				]
			});	
		}

		modal.checkOverflow();

				 
		return modal;
	}

	function slideWithMouse(){
		const slider = document.querySelector('.scrolling-wrapper');
		let isDown = false;
		let startX;
		let scrollLeft;

		slider.addEventListener('mousedown', (e) => {
			isDown = true;
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		});
		slider.addEventListener('mouseleave', () => {
			isDown = false;
		});
		slider.addEventListener('mouseup', () => {
			isDown = false;
		});
		slider.addEventListener('mousemove', (e) => {
			if(!isDown) return;
			e.preventDefault();
			const x = e.pageX - slider.offsetLeft;
			const walk = (x - startX) * 2; //scroll-fast
			slider.scrollLeft = scrollLeft - walk;
		});
	}

	 


});