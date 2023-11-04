// Almacenamiento temporal de actividades
let activities = [];

// Función para agregar una actividad
function addActivity() {
    const description = document.getElementById('description').value;
    const days = document.getElementById('days').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const responsible = document.getElementById('responsible').value;

    const activity = {
        description,
        days,
        startDate,
        endDate,
        responsible
    };

    activities.push(activity);
    displayActivities();
}

// Función para mostrar las actividades en la lista
function displayActivities() {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = '';

    activities.forEach((activity, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Descripción: ${activity.description} <br>
            Cantidad de días: ${activity.days} <br>
            Fecha de inicio: ${activity.startDate} <br>
            Fecha de fin: ${activity.endDate} <br>
            Responsable: ${activity.responsible} <br>
            <button onclick="editActivity(${index})">Editar</button>
            <button onclick="deleteActivity(${index})">Eliminar</button>
            <hr>
        `;
        activityList.appendChild(li);
    });
}

// Función para editar una actividad
function editActivity(index) {
    const activity = activities[index];
    // Aquí podrías implementar la lógica para editar la actividad
    // Por ejemplo, podrías llenar el formulario con los detalles de la actividad seleccionada para su edición.
    // Luego, podrías guardar los cambios en el array de actividades.
}

// Función para eliminar una actividad
function deleteActivity(index) {
    activities.splice(index, 1);
    displayActivities();
}