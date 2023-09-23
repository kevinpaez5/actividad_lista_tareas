//Agregar nueva tarea
function agregarTarea () {
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const listaTareas = document.getElementById('listaTareas');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();  

    if(nuevaTareaInput !== "") {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = nuevaTareaTexto;

        const bottonEliminar = document.createElement('button');
        bottonEliminar.textContent = "Eliminar";
        bottonEliminar.className = "delete";
        bottonEliminar.onclick = function(){
            listaTareas.removeChild(nuevaTarea);
        };

        nuevaTarea.appendChild(bottonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}

//Funcion para marcar una tarea como completada
function marcarCompletada (tarea) {
    tarea.classList.toggle('completed');
}

//Agregar evento de click a las tareas para marcarlas como completadas
document.getElementById('listaTareas').addEventListener('click', function(event){
    if (event.target.tagName === "LI") {
        marcarCompletada(event.target);
    }
});

//Agregar evento de click al boton "Agregar"
document.getElementById('agregarTarea').addEventListener('click', agregarTarea);