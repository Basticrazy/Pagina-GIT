/*
Esto es un prueba de recuperado y bajado de manera local con:  git fetch //-> nos muestra si hay cambios en el GitHub.
							       git merge origin/master //-> une los cambios realizados (merge) que se han hecho en origin (GitHub) hacia la 
							       			       // rama local master (nuestro computador).
*/
/*
Esto es un prueba de recuperado y bajado de manera local con: git pull origin master //-> une los cambios realizados de manera remota en el GitHub (origin) de la rama master
										     //hacia nuestro computador.
*/

/*
	NOTA: RECORDAR APRENDER OBSERVER O ANIMACION SOBRE SCROLLING.
*/

///////CODIGO PARA OBTENER Y MODIFICAR ESTILOS A TRA VES DE STYLESHEETS.///////
/*NOTA: Para que esto funcione debe estar dentro de un mismo servidor o dentro de un mismo dominio.*/
/*console.log(document.styleSheets[1].cssRules);
let obtenerScrollParrafos= () => {
		for(let i=0; i<document.styleSheets[1].cssRules.length; i++){
			if(document.styleSheets[1].cssRules[i].selectorText == ".__content-contenedor p::-webkit-scrollbar"){
				return document.styleSheets[1].cssRules[i];
			}
	}
}
let scrollParrafos = obtenerScrollParrafos();
console.log(scrollParrafos);*/
///////FIN CODIGO PARA OBTENER Y MODIFICAR ESTILOS A TRA VES DE STYLESHEETS.///////



/*////////CODIGO PARA REEMPLAZAR ESTILOS DE PSEUDOELEMENTOS////////*/
/*var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
            return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));*/


/*document.querySelectorAll(".__content-contenedor p").forEach( (parrafo) => {
		parrafo.addEventListener("scroll", (evt)=>{
			evt.target.style.background = 'red';

			/*console.log(evt.target.className);
			console.log(window.getComputedStyle(evt.target, "::-webkit-scrollbar")["width"]);
			console.log(window.getComputedStyle(evt.target, "::-webkit-scrollbar").sheet);*/

			/*addRule("."+evt.target.className+"::-webkit-scrollbar",{
				"animation-name": "esconderScroll !important",
				"animation-duration": "2s !important",
				"animation-iteration-count": "1 !important",
				"animation-timing-function": "cubic-bezier(1,1,1,1) !important",
				"animation-direction": "normal !important",
				"animation-fill-mode": "forwards !important"
			});*/

			/*setTimeout(()=>{
				addRule("."+evt.target.className+"::-webkit-scrollbar",{
				transition : 'width 2s linear 2s !important',
				
			});
			}, 1000);*/
			

			//NOTA: AGREGAR TEMPORIZADOR AL SCROLL PARA QUE DESAPAREZCA SUAVEMENTE.
		//});
	//});
/*////////FIN CODIGO PARA REEMPLAZAR ESTILOS DE PSEUDOELEMENTOS////////*/

/////////////////////////////SVG STYLES/////////////////////////////

//let objectLogo = document.querySelector(".logo");

//window.addEventListener("load", () => {

	/*Hacemos referecia al svg que esta dentro del objectLogo.*/
//	const svgLogo = objectLogo.innerText;


	//LOGRAR HACER QUE EL SVG SE VEA POR CONSOLA.
//	console.log(svgLogo);
//});

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

