const reemplazos = {
  cifrar: { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" },
  descifrar: { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u" }
};

function mostrarVentanaEmergente(mensaje) {
  const ventana = document.createElement('div');
  ventana.innerText = mensaje;
  Object.assign(ventana.style, {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '9999',
    color: '#FFFFFF',
    padding: '15px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '3em'
  });

  document.body.appendChild(ventana);
  setTimeout(() => document.body.removeChild(ventana), 1500);
}



function procesarTexto(accion) {
  const entrada = document.getElementById('entradaTexto').value.toLowerCase();
  const reemplazo = reemplazos[accion];
  const regex = new RegExp(Object.keys(reemplazo).join('|'), 'gi');
  document.getElementById('salidaTexto').value = entrada.replace(regex, match => reemplazo[match]);
  document.getElementById('entradaTexto').value = '';
  mostrarVentanaEmergente(`¡Texto ${accion === 'cifrar' ? 'encriptado' : 'desencriptado'} correctamente!`);
}

function copiarAlPortapapeles() {
  navigator.clipboard.writeText(document.getElementById('salidaTexto').value);
  document.getElementById('salidaTexto').value = '';
  mostrarVentanaEmergente("¡Texto copiado al portapapeles correctamente!");
}

function pegarDesdePortapapeles() {
  navigator.clipboard.readText()
    .then(text => document.getElementById('entradaTexto').value = text)
    .catch(() => mostrarVentanaEmergente("Error al pegar el texto desde el portapapeles."));
}

window.addEventListener('load', () => {
  document.getElementById('cifrar').addEventListener('click', () => procesarTexto('cifrar'));
  document.getElementById('descifrar').addEventListener('click', () => procesarTexto('descifrar'));
  document.getElementById('copiar').addEventListener('click', copiarAlPortapapeles);
  document.getElementById('pegar').addEventListener('click', pegarDesdePortapapeles);
});
