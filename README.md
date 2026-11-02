# Gestión de productos · Grupo 5

Proyecto Lit con registro y listado de productos. Cada producto contiene nombre, categoría y precio. Los registros permanecen durante la sesión de la página y se borran al recargar.

## Componentes

- `src/views/home/register.js`: formulario propio, compartible, etiqueta `wc-form-producto`. Solo depende de Lit; sus estilos están incluidos.
- `src/views/home/table.js`: tabla propia, etiqueta `wc-table-productos`, recibe `.list` como arreglo de objetos `{ id, nombre, categoria, precio }`.
- `src/views/integracion/integracion.js`: padre, conserva la lista y conecta evento y propiedad.

## Formulario de productos

Archivo: `src/views/home/register.js`.

Etiqueta: `wc-form-producto`.

Dependencia: Lit.

El evento `producto-registrado` entrega `event.detail` con la estructura `{ nombre: string, categoria: string, precio: number }`. Usa `bubbles: true` y `composed: true`. Después de emitir el evento, el formulario limpia sus campos.

El componente padre recibe los datos, asigna un identificador y actualiza la lista mediante un arreglo nuevo. La tabla recibe la lista por la propiedad `list`.

## Comprobaciones manuales

1. Registrar Mouse, Tecnología, 12.50: debe aparecer una fila con $12.50.
2. Registrar Cuaderno, Papelería, 2.00: deben quedar dos filas sin duplicar la primera.
3. Comprobar que el formulario se limpia después de registrar.
4. Abrir F12 y comprobar que la consola está limpia.
5. Reducir el ancho de la ventana: formulario y tabla deben apilarse.
