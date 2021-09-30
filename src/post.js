import { doc, setDoc } from "firebase/firestore";

export const post = () => {
    const templatePost = `
    <div id ="contenedor-post" class = "contenedor-post">
    <form class = "formulario-post">
    <div class = "Formgrupo">        
      <input type = "text" id = "nombre-restaurante" placeholder="Nombre del Restaurante">
    </div>

    <div class = "formgrupo">
      <textarea id ="datos-restaurante" rows="8" class = "datos-restaurante" 
      placeholder="Describe los datos: Costo, horario y ubicación"></textarea>
    </div>

    <button id="btn-publicar" type="submit">PUBLICAR</button
    </form>
    </div>
  `;

   //se crea un elemto tipo template para insertarle el texto de la plantilla
 let template = document.createElement("template");
 template.innerHTML = templatePost; //remplaza
 // se obtiene el formulario dentro el elemnto template
 let form = template.content.querySelector("#formulario-post");
  return templatePost;

  //form.addEventListener("submit", (evt) => {
    //evt.preventDefault();
    //let nombre = document.querySelector("#nombre-restaurante").value;
    //let descripcion = document.querySelector("#datos-restaurante").value;
    

}

