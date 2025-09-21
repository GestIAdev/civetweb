9) Cambios recientes en la Interfaz de Usuario y Diseño

Se han realizado las siguientes modificaciones en la interfaz y el diseño del proyecto:

*   **Barra de Navegación (Navbar):**
    *   Se añadió una barra de navegación superior con enlaces "Inicio", "Servicios", "Productos" y "Contacto".
    *   El logo de Civet (`logocivet.jpg`) se integró en la barra de navegación, posicionado a la izquierda.
    *   Los enlaces de navegación están centrados dentro de la barra.
    *   El color de fondo de la barra de navegación es un verde vibrante (`#13d813`).
    *   Se añadieron bordes negros sólidos de 4px en la parte superior e inferior de la barra de navegación.

*   **Pie de Página (Footer):**
    *   Los botones de WhatsApp e Instagram se movieron al pie de página.
    *   El color de fondo del pie de página es el mismo verde vibrante (`#13d813`) que la barra de navegación.
    *   Se añadieron bordes negros sólidos de 4px en la parte superior e inferior del pie de página.
    *   La altura del pie de página se minimizó a 40px.

*   **Área de Contenido Principal (`main`):**
    *   El color de fondo del área de contenido principal es el verde WhatsApp (`#25D366`).

*   **Diseño General y Estructura:**
    *   Los componentes ahora ocupan el ancho completo de la pantalla (se eliminó `max-width` del contenedor principal).
    *   Se implementó un "sticky footer" para asegurar que el pie de página siempre esté al final de la ventana visible, incluso con poco contenido.
    *   Se eliminaron los bloques de información de "Horario", "Teléfono" y "Dirección".
    *   Se eliminó la sección de "Servicios".
    *   Se ajustaron los márgenes para evitar desbordamientos y mejorar el espaciado.
    *   Se añadió `overflow: hidden;` a `html, body` para ocultar las barras de desplazamiento (con la consideración de accesibilidad).

*   **Sección Hero (Imagen de Fondo):**
    *   La imagen `vetelocal.png` ahora se utiliza como imagen de fondo de la sección `hero`.
    *   La sección `hero` tiene una altura mínima de 400px para asegurar la visibilidad del fondo.
    *   Se añadió un borde negro sólido de 2px alrededor de la sección `hero`.
    *   La etiqueta `<img>` original de la imagen local fue eliminada de `App.jsx`.