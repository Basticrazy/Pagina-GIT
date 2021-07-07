/////////////////////////////SVG STYLES/////////////////////////////
let objectLogo = document.querySelector(".logo");

window.addEventListener("load", () => {

	/*Hacemos referecia al svg que esta dentro del objectLogo.*/
	const svgLogo = objectLogo.innerText;


	//LOGRAR HACER QUE EL SVG SE VEA POR CONSOLA.
	console.log(svgLogo);
});

/////////////////////////////FIN SVG STYLES/////////////////////////////


/*///////////////////////////HOVERS///////////////////////////*/


/*------------Bloque de presentacion------------*/

/*
const presentacionFalsoTag = document.querySelector(".div-contenedor__presentacion--pantalla-falsa");

presentacionTag.addEventListener("mouseenter", () => {
	
	presentacionFalsoTag.style.animationName = 'deslizarFinDerecha';
	presentacionFalsoTag.style.animationDirection = 'normal';
	presentacionFalsoTag.style.animationDuration = '1s';
	presentacionFalsoTag.style.animationFillMode = 'forwards';
	
});

presentacionTag.addEventListener("mouseleave", () => {
	
	presentacionFalsoTag.style.animationName = 'deslizarFinIzquerda';
	presentacionFalsoTag.style.animationDirection = 'normal';
	presentacionFalsoTag.style.animationDuration = '1s';
	presentacionFalsoTag.style.animationFillMode = 'forwards';

});

*/

/*------------Fin bloque de presentacion------------*/

/*///////////////////////////FIN HOVERS///////////////////////////*/

