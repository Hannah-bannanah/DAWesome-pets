/*Este archivo contiene algunas funciones básicas de javascript para algunas de las páginas.*/

/*Función que abre el formulario de adopción en una pestaña nueva, enviando los datos de la mascota elegida*/
function adoptar (petId){
    const cadenaUrl = 'formularioAdopcion.html?mascotaElegida=true&idMascota=' + petId;
    window.open(cadenaUrl, "_blank");
}

/*Función que prerrellena parte del formulario de adopción al cargarse, si se le han enviado parámetros*/
function prerrellenarFormulario(){
    const urlParam = new URLSearchParams(window.location.search); /*obtiene la parte de la url que contiene los parámetros*/

    /*extraer los parámetros relevantes a la mascota elegida (en un futuro la funcionalidad se puede ampliar a otros parámetros)*/
    const mascotaElegida = urlParam.get('mascotaElegida'); 
    const miMascotaiD = urlParam.get('idMascota');

    /*rellena los campos para los que tenemos parámetros*/
    if (mascotaElegida) {
        document.getElementById('mascotaElegida').checked = true;
        toggleDatosMascota();
        document.getElementById('idMascota').value = miMascotaiD;
    }
}

/*Función que habilita y deshabilita las secciones de datos de la mascota según el valor de mascotaElegida*/
function toggleDatosMascota () {
    const valorToggle = document.getElementById('mascotaElegida').checked;
    document.getElementById('idMascota').disabled = !valorToggle;
    document.getElementById('especie').disabled = valorToggle;
    document.getElementById('sexo').disabled = valorToggle;
    document.getElementById('edad').disabled = valorToggle;
    document.getElementById('tamMascota').disabled = valorToggle;
}

/*Función que habilita y deshabilita la sección de descripción de vivienda según la opción elegida en Vivienda*/
function toggleDescripcionVivienda(){
    const valorToggle = document.getElementById('otraVivienda').checked;
    document.getElementById('descVivienda').disabled = !valorToggle;
    document.getElementById('descVivienda').required = valorToggle;
}