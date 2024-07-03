
// window.onload=()=> es para que se ejecute lo que hay dentro en cuanto se cargue la página
window.onload=()=>{



    // const destinos = [
    //     { value: 'local', text: 'Local' },
    //     { value: 'provincial', text: 'Provincial' },
    //     { value: 'autonoma', text: 'Comunidad Autónoma' },
    //     { value: 'nacional', text: 'Nacional' },
    //     { value: 'ceuta_melilla', text: 'Ceuta y Melilla' },
    //     { value: 'baleares_canarias', text: 'Baleares y Canarias' },
    //     { value: 'europa', text: 'Europa' },
    //     { value: 'resto_mundo', text: 'Resto del Mundo' }
    // ];

    // const pesos = [
    //     { value: '0.5', text: 'Hasta 0,5kg' },
    //     { value: '5', text: 'Hasta 5kg' },
    //     { value: '10', text: 'Hasta 10kg' },
    //     { value: '20', text: 'Hasta 20kg' }
    // ];

    // const precios = [
    //     [4.88, 6.75, 8.49, 11.39],
    //     [10.88, 9.75, 11.49, 14.39],
    //     [10.88, 12.75, 14.49, 17.39],
    //     [14.88, 16.75, 18.49, 21.39],
    //     [20.88, 22.75, 24.49, 27.39],
    //     [18.88, 20.75, 22.49, 25.39],
    //     [22.88, 24.75, 26.49, 29.39],
    //     [27.88, 29.75, 31.49, 34.39]
    // ];

    // let selectDestino = document.querySelector("#destino");
    // let selectPeso = document.querySelector("#peso");

    // Llenar selectDestino
    // for (let i = 0; i < destinos.length; i++) {
    //     const option = document.createElement('option');
    //     option.value = i;
    //     option.text = destinos[i].text;
    //     selectDestino.appendChild(option);
    // }

    // Llenar selectPeso
//     for (let j = 0; j < pesos.length; j++) {
//         const option = document.createElement('option');
//         option.value = j;
//         option.text = pesos[j].text;
//         selectPeso.appendChild(option);
//     }

//     document.querySelector("#calcular").addEventListener("click", function() {
//         const destinoposicionArray = selectDestino.value;
//         const pesoposicionArray = selectPeso.value;

       

//         if (destinoposicionArray=="" || pesoposicionArray=="") {
//             alert("Seleccione un campo válido");
//         }else{
//             const precio = precios[destinoposicionArray][pesoposicionArray];
//             document.querySelector('#resultadoSelect').innerHTML = `El precio es ${precio}€`;
//         }
//   });





    let destinos=["Local", "Provincial", "Comunidad Autonoma", "Nacional", "Ceuta y Melilla", "Baleares y Canarias", "Europa", "Resto del Mundo"]; //array de 1 dimensión
     let pesos=["Hasta 0.5KG", "Hasta 5KG", "Hasta 10KG", "Hasta 20KG"]; 

    let precios=[ 

        [4.88, 6.75, 8.49, 11.39],
        [10.88, 9.75, 11.49, 14.39],
        [10.88, 12.75, 14.49, 17.39],
        [14.88, 16.75, 18.49, 21.39],   
        [20.88, 22.75, 24.49, 27.39],
        [18.88, 20.75, 22.49, 25.39],
        [22.88, 24.75, 26.49, 29.39],
        [27.88, 29.75, 31.49, 34.39]
    ];

    let desplegableDestino=document.querySelector("#destino");
    let desplegablePeso=document.querySelector("#peso");


    destinos.forEach((nombresDestinos, posicionArray)=>{ // Por cada elemento de "destinos" (Que se está tratando en este momento) va a ejecutar lo del interior
        let option=document.createElement("option"); // Crea un elemento option por cada vuelta
        option.value=posicionArray; // Rellena el opcion con un número, que es la posición que tiene en el Array
        option.text=nombresDestinos; // Rellena el option con el texto que tiene esa posición
        desplegableDestino.appendChild(option); // Del desplegable se crean hijos, que son los option que se crean en cada vuelta
    });

    pesos.forEach((nombresPesos, posicionArray)=>{
        let option=document.createElement("option");
        option.value=posicionArray;
        option.text=nombresPesos;
        desplegablePeso.appendChild(option);
    });

    document.querySelector("#calcular").addEventListener("click", function(){
        
        let indiceDestinos=desplegableDestino.value;  // Crear variables para almacenar el índice de la opción seleccionada
        let indicePesos=desplegablePeso.value; 

        if (indiceDestinos=="" || indicePesos=="") { //Si alguno de los campos está vacío
            document.querySelector("#resultadoSelect").innerHTML=`Selecciona una opción`; // Sale mensaje de "Selecciona una opción"
            document.querySelector("#resultadoSelect").style="color: red;" // Cambia a color rojo
        }else{ // Si ningún campo queda vacío
            let precio=precios[indiceDestinos][indicePesos]; // precio = la posición concreta del Array precios precio = precios[0][1]
            document.querySelector("#resultadoSelect").innerHTML=`El precio es de ${precio}€`; // Muestra el resultado
            document.querySelector("#resultadoSelect").style="color: black;" // En color negro
        }
    });

}

// };


 



