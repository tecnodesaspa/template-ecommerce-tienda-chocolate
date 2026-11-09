# Sublime Chocolat — Template ecommerce

Template de chocolatería con 11 páginas HTML existentes.

## Alcance

Incluye catálogo, detalle, carrito, pago, confirmación y ubicación. El menú usa JavaScript compartido; el recorrido de compra presenta pantallas y datos de ejemplo.

Los precios, contactos y datos de cliente son ejemplos para personalizar. La presencia de un formulario o botón no garantiza una integración con servicios externos.

## Tecnologías y estructura

- HTML para las páginas.
- Tailwind CSS mediante CDN; no requiere compilar estilos para la vista previa.
- Estilos y configuración visual incluidos en los propios HTML.
- JavaScript local: `main.js`.
- Fuentes, iconos o imágenes externas según cada pantalla; se necesita conexión para cargar esos recursos.

## Vista previa local

Desde esta carpeta, inicia un servidor estático. Por ejemplo, con Node.js y npm disponibles:

```sh
npx --yes http-server . -p 8000
```

Abre [la pantalla inicial](http://localhost:8000/index.html) en el navegador. No hay un package.json ni un paso de build propio del template.

La navegación existente usa el prefijo absoluto `/template-ecommerce-tienda-chocolate/`. La URL anterior permite inspeccionar la pantalla inicial; para recorrer los enlaces sin modificarlos, configura tu servidor o sitio contenedor para servir esta carpeta bajo ese prefijo. Las rutas de los archivos se conservan tal como están.

## Páginas incluidas

Las rutas son relativas a esta carpeta.

| Archivo | Título de la pantalla |
| --- | --- |
| `carrito/index.html` | Sublime Chocolat - Carrito |
| `confirmacion/index.html` | Sublime Chocolat - Pedido Confirmado |
| `contacto/index.html` | Sublime Chocolat - Contacto |
| `detalle-producto/index.html` | Sublime Chocolat - Chocolate Negro Intenso |
| `index.html` | Sublime Chocolat |
| `nosotros/index.html` | Sublime Chocolat - Sobre Nosotros |
| `pago/index.html` | Sublime Chocolat - Checkout |
| `politicas/index.html` | Sublime Chocolat - Política de Privacidad |
| `productos/index.html` | Sublime Chocolat |
| `terminos/index.html` | Sublime Chocolat - Términos y Condiciones |
| `ubicacion/index.html` | Sublime Chocolat - Ubicación |

## Personalización

- Edita los textos, contactos e imágenes en los HTML.
- Ajusta la configuración de Tailwind y los bloques de estilos de cada HTML.
- Los importes del template están presentados en CLP. Mantén el formato sin decimales y los contactos de ejemplo para Chile al personalizarlo.
- Comprueba los cambios en móvil, tablet y escritorio.

## Integración

Antes de usar el template en una tienda operativa, conecta los servicios que correspondan: catálogo, inventario, autenticación, pedidos, pagos y contacto. Revisa las rutas y sustituye el contenido de muestra y los textos legales por los del negocio.
