# Integración con el componente de otro equipo

## 1. Datos

| Campo | Valor |
|---|---|
| Equipo | Grupo 5 · Gestión de productos |
| Equipo externo | Pendiente |
| Repositorio externo | Pendiente |
| Archivo externo | Pendiente de recibir |
| Commit usado | Pendiente |

## 2. Componentes y roles

| Componente | Archivo | Origen | Rol |
|---|---|---|---|
| wc-integracion | src/views/integracion/integracion.js | Grupo 5 | Padre, dueño de lista |
| wc-form-producto | src/views/home/register.js | Grupo 5 | Emite producto-registrado; componente para compartir |
| wc-table-productos | src/views/home/table.js | Grupo 5 | Recibe list por propiedad |

Estado: flujo interno implementado; componente externo pendiente de recepción.

## 3. Flujo de comunicación

El formulario propio emite producto-registrado con nombre, categoria y precio. El padre añade un id y crea un arreglo nuevo; la tabla recibe ese arreglo por la propiedad list.

```js
registrarProducto(event) {
  const { nombre, categoria, precio } = event.detail;
  const producto = { id: this.lista.length + 1, nombre, categoria, precio: Number(precio) };
  this.lista = [...this.lista, producto];
}
```

Integración externa: pendiente.

## 4. Dificultades

| Integrante | Síntoma | Causa | Solución |
|---|---|---|---|
| Pendiente | Sin registrar | Pendiente | Pendiente |

## 5. Evaluación del componente externo

| Aspecto | Nota (0–5) | Evidencia |
|---|---|---|
| API clara | Pendiente | Componente no recibido |
| Evento bien construido | Pendiente | Componente no recibido |
| Robustez | Pendiente | Componente no recibido |
| Encapsulamiento | Pendiente | Componente no recibido |
| Reutilización | Pendiente | Componente no recibido |

Issue abierto: pendiente.

## 6. Uso de IA

| Herramienta | Quién la usó | Para qué | Qué cambiamos |
|---|---|---|---|
| ChatGPT | Dylan | Generación inicial de componentes y documentación | Pendiente |

## 7. Aportes del equipo

| Integrante | Usuario de GitHub | Rol | Qué hizo | Enlace a sus commits |
|---|---|---|---|---|
| Cajas Dylan | Por confirmar | Pendiente | Pendiente | Pendiente |
| De la Cruz Alejandro | Por confirmar | Pendiente | Pendiente | Pendiente |
| Sangoquiza David | Por confirmar | Pendiente | Pendiente | Pendiente |

Pull request: pendiente · Revisado por: pendiente.
