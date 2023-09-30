


/*const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguinte");
let pagina = 1;

const cargarReceta = async ()=>{
try{
    const respuesta = await fetch('https://raw.githubusercontent.com/CristianAbelRobles/CapacitacionEquiposTecnicos/main/data/datos.json');

    console.log(respuesta);
    if (respuesta.status === 200){
        const datos = await respuesta.json();
        let recetas = "";
        datos.results.forEach(recetas => {
            recetas += `
            <div class="recetas">
            <img class= imagenReceta src="${receta.ejemplo}">
            <h3 class="titulo">${receta.nombre} </h3>
            <p>${receta.descripcion_tipo} </p>
            </div>
            `
            
        });
        document.getElementById("contenedor").innerHTML = recetas;
    }
    else if (respuesta.status === 401){console.log("key incorrecta");}
    else if (respuesta.status === 404){console.log("key no disponible");}
    else {console.log("no se que paso");}
    }
    
    
    
catch(error){
    console.log(error.message);
}





}
cargarReceta();*/

/*document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguinte");
let pagina = 1;

const cargarReceta = async ()=>{
try{
    const respuesta = await fetch('https://raw.githubusercontent.com/CristianAbelRobles/CapacitacionEquiposTecnicos/main/data/datos.json');

    console.log(respuesta);
    if (respuesta.status === 200){
        const datos = await respuesta.json();
        let recetas = "";
        datos.forEach(receta => {
            recetas += `
            <div class="recetas">
            <h3 class="titulo">${receta.nombre} </h3>
            <p>${receta.descripcion} </p>
            </div>
            `
            
        });
        document.getElementById("contenedor").innerHTML = recetas;
    }
    else if (respuesta.status === 401){console.log("key incorrecta");}
    else if (respuesta.status === 404){console.log("key no disponible");}
    else {console.log("no se que paso");}
    }
    
    
    
catch(error){
    console.log(error.message);
}

}
cargarReceta();
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguinte");



const cargarReceta = async ()=>{
try{
    const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');

    console.log(respuesta);
    if (respuesta.status === 200){
        const datos = await respuesta.json();
        let recetas = "";
        datos.results.forEach(receta => {
            recetas += `
            <div class="recetas">
            <img src="https://www.themealdb.com/images/media/meals/${strMealThumb}" alt="">
            <h3 class="titulo">${meal.strMeal} </h3>
            <p>${meal.strInstructions} </p>
            </div>
            `
            
        });
        document.getElementById("contenedor").innerHTML = recetas;
    }
    else if (respuesta.status === 401){console.log("key incorrecta");}
    else if (respuesta.status === 404){console.log("key no disponible");}
    else {console.log("no se que paso");}
    }
    
    
    
catch(error){
    console.log(error.message);
}

}
cargarReceta();*/
const cargarReceta = async () => {
    try {
        const respuesta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            let recetas = "";
            datos.meals.forEach(meal => {
                recetas += `
                <div class="recetas">
                    <img src="${meal.strMealThumb}" alt="">
                    <h3 class="titulo">${meal.strMeal}</h3>
                    <p>${meal.strArea}</p>
                    <a class="verRec">Ver Receta</a>
                </div>
                `;
            });
            document.getElementById("contenedor").innerHTML = recetas;
        } else if (respuesta.status === 401) {
            console.log("key incorrecta");
        } else if (respuesta.status === 404) {
            console.log("key no disponible");
        } else {
            console.log("no se que paso");
        }
    } catch (error) {
        console.log(error.message);
    }
}

cargarReceta();
