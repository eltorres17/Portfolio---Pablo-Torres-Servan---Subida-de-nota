document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".main__seccion, .main__af2, .main__af3");
    const btnAtras = document.querySelector(".main__atras__imagen");
    const btnSiguiente = document.querySelector(".main__siguiente__imagen");
    let currentIndex = 0;

    const mostrarSeccion = (index) => {
        sections.forEach((section, i) => {
            section.style.display = i === index ? "flex" : "none";
        });
    };

    btnSiguiente.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % sections.length;
        mostrarSeccion(currentIndex);
    });

    btnAtras.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        mostrarSeccion(currentIndex);
    });
});

  //  mostrarSeccion(currentIndex);

  document.addEventListener("DOMContentLoaded", () => {
    // --- Portafolio ---
    let proyectoSeleccionado = null;

    // Seleccionar proyectos
    document.querySelectorAll(".proyectos__lista li").forEach((elemento) => {
        elemento.addEventListener("click", (event) => {
            // Evitar que el clic en el <img> interfiera
            event.stopPropagation();

            // Quitar clase 'seleccionado' de todos los proyectos
            document.querySelectorAll(".proyectos__lista li").forEach((p) => p.classList.remove("seleccionado"));

            // Añadir clase 'seleccionado' al proyecto clicado
            elemento.classList.add("seleccionado");

            // Guardar el proyecto seleccionado
            proyectoSeleccionado = elemento.getAttribute("data-url");
        });
    });

    // Abrir proyecto seleccionado
    const abrirProyectoBtn = document.querySelector(".main__boton");
    abrirProyectoBtn.addEventListener("click", () => {
        if (proyectoSeleccionado) {
            window.open(proyectoSeleccionado, "_blank");
        } else {
            alert("Selecciona un proyecto primero.");
        }
    });
});

// --- Modo oscuro --- //
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Alternar modo oscuro
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Guardar preferencia en localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Aplicar preferencia guardada
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }
});