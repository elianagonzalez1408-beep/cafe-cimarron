
// MENÚ DE NAVEGACIÓN
const enlaces = document.querySelectorAll(".menu ul li a");

// Marcar la sección seleccionada
enlaces.forEach(enlace => {
    enlace.addEventListener("click", function () {
        enlaces.forEach(item => {
            item.classList.remove("activo");
        });

        this.classList.add("activo");
    });
});

// ACTUALIZAR EL AÑO DEL PIE DE PÁGINA
const piePagina = document.querySelector("footer p");

if (piePagina) {
    piePagina.textContent =
        `© ${new Date().getFullYear()} Café Cimarrón. El sabor original del Café.`;
}
