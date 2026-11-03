import { LitElement, html, css } from 'lit';

// Tabla propia del Grupo 5 para mostrar los clientes que llegan del Grupo 1.
export class TablaClientes extends LitElement {
  static properties = { list: { type: Array } };
  static styles = css`
    :host { display:block; overflow-x:auto; }
    table { border-collapse:separate; border-spacing:0; width:100%; text-align:left; font-size:15px; }
    th, td { padding:14px 12px; overflow-wrap:anywhere; }
    th {
      background:#f5f3ff;
      color:#4c1d95;
      font-size:13px;
      text-transform:uppercase;
      letter-spacing:.06em;
    }
    th:first-child, td:first-child { border-radius:12px 0 0 12px; }
    th:last-child, td:last-child { border-radius:0 12px 12px 0; }
    tbody tr:nth-child(even) { background:#faf8ff; }
    tbody tr:hover { background:#f5f3ff; }
    td:nth-child(3) { color:#6d28d9; }
    p {
      color:#64748b;
      padding:18px;
      border:1.5px dashed #ddd6fe;
      border-radius:14px;
      text-align:center;
    }
  `;
  constructor() {
    super();
    this.list = [];
  }
  render() {
    const clientes = Array.isArray(this.list) ? this.list : [];
    return clientes.length ? html`
      <table>
        <thead><tr><th>N.º</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Edad</th></tr></thead>
        <tbody>${clientes.map(cliente => html`
          <tr><td>${cliente.id}</td><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.correo}</td><td>${cliente.edad}</td></tr>
        `)}</tbody>
      </table>` : html`<p>Todavía no hay clientes registrados.</p>`;
  }
}
customElements.define('wc-table-clientes', TablaClientes);
