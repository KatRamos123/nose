// Modal de adopción
function mostrarFormulario(nombreGato) {
  const modal = document.getElementById("formularioModal");
  const spanNombre = document.getElementById("nombreGato");
  
  spanNombre.textContent = nombreGato;
  modal.style.display = "block";
}

function cerrarFormulario() {
  document.getElementById("formularioModal").style.display = "none";
}

function enviarFormulario(event) {
  event.preventDefault();
  const nombreGato = document.getElementById("nombreGato").textContent;
  alert(`¡Gracias por querer adoptar a ${nombreGato}! Revisaremos tu solicitud y te contactaremos pronto.`);
  cerrarFormulario();
  event.target.reset(); // Limpiar el formulario
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
  const modal = document.getElementById("formularioModal");
  if (event.target === modal) {
    cerrarFormulario();
  }
};

// 3. Añadir un 'event listener' al campo de edad
// Cada vez que la edad cambie (el usuario escriba o modifique), se llama a la función
edadInput.addEventListener('input', actualizarCampoTutor);

// 4. Asegurarse de que la función se ejecute al cargar la página por primera vez
// Esto es importante si el usuario ya ha rellenado el campo de edad al recargar, etc.
document.addEventListener('DOMContentLoaded', actualizarCampoTutor);

// 5. Opcional: Validar el formulario antes de enviarlo (para una doble comprobación)
formulario.addEventListener('submit', function(event) {
    const edad = parseInt(edadInput.value);

    if (edad < 18 && tutorInput.value.trim() === '') {
        // Si es menor de 18 y el tutor está vacío, prevenimos el envío
        event.preventDefault(); // Detiene el envío del formulario
        alert("Para menores de 18 años, el campo 'Tutor Legal' es obligatorio.");
        tutorInput.focus(); // Pone el foco en el campo del tutor
    }
    // Si la edad es >= 18, o si es menor pero el tutor ya está lleno, el formulario se envía normalmente.
});

function enviarFormulario(event) {
  event.preventDefault();

  // 1. Obtener todos los datos del formulario
  const formData = new FormData(event.target);
  let texto = "Datos del formulario - " + new Date().toLocaleString() + "\n";
  texto += "----------------------------------------\n";

  for (let [key, value] of formData) {
    texto += key + ": " + value + "\n";
  }
  texto += "========================================\n\n";

  // 2. Crear un archivo y descargarlo
  const blob = new Blob([texto], { type: 'text/plain' });
  const a = document.createElement('a');
  a.download = 'registro_formulario.txt';
  a.href = URL.createObjectURL(blob);
  a.click();

  // 3. Mostrar el mensaje original (el que ya tenías)
  const nombreGato = document.getElementById("nombreGato")?.textContent;
  if (nombreGato) {
    alert(`¡Gracias por querer adoptar a ${nombreGato}! Revisaremos tu solicitud y te contactaremos pronto.`);
  } else {
    alert("¡Gracias por tu solicitud! La hemos recibido correctamente.");
  }

  // 4. Cerrar el modal (si existe)
  cerrarFormulario();
} 

  // Ejecutar validación al cargar y al cambiar edad
    document.addEventListener('DOMContentLoaded', actualizarCampoTutor);
    edadInput.addEventListener('input', actualizarCampoTutor);

























