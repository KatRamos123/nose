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
window.onclick = function (event) {
  const modal = document.getElementById("formularioModal");
  if (event.target === modal) {
    cerrarFormulario();
  }
};

function enviarFormulario(event) {
  event.preventDefault();

   // 1. Obtener todos los datos del formulario
      const formData = new FormData(event.target);
      let texto = "=== Solicitud de Adopción ===\n";
      texto += "Fecha: " + new Date().toLocaleString() + "\n";
      texto += "----------------------------\n";


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
  const nombreGato = document.getElementById("nombreGato").textContent;
      alert(`¡Gracias por querer adoptar a ${nombreGato}! Revisaremos tu solicitud y te contactaremos pronto.`);
 
  // 4. Cerrar modal y limpiar
      cerrarFormulario();
      event.target.reset();
    }

    // Cerrar modal al hacer clic fuera
    window.onclick = function(event) {
      const modal = document.getElementById("formularioModal");
      if (event.target === modal) {
        cerrarFormulario();
      }
    };

