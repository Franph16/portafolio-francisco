if (!localStorage.getItem('cookies-accepted')) {
  // Muestra la barra de cookies
  document.getElementById('cookie-consent').style.display = 'block';
}

// Función para aceptar las cookies
document.getElementById('accept-cookies').addEventListener('click', function() {
  // Guarda la preferencia en el localStorage
  localStorage.setItem('cookies-accepted', 'true');
  // Oculta la barra de cookies
  document.getElementById('cookie-consent').style.display = 'none';
});