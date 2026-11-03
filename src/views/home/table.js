import { LitElement, html, css } from 'lit';

export class TablaProductos extends LitElement {
  static properties = { list: { type: Array } };
  static styles = css`
    :host { display:block; overflow-x:auto; }
    table { border-collapse:separate; border-spacing:0; width:100%; text-align:left; font-size:15px; }
    th, td { padding:14px 12px; }
    th {
      background:#eef2ff;
      color:#3730a3;
      font-size:13px;
      text-transform:uppercase;
      letter-spacing:.06em;
    }
    th:first-child, td:first-child { border-radius:12px 0 0 12px; }
    th:last-child, td:last-child { border-radius:0 12px 12px 0; }
    tbody tr:nth-child(even) { background:#f8faff; }
    tbody tr:hover { background:#eef2ff; }
    td:last-child { font-weight:700; color:#0e7490; }
    p {
      color:#64748b;
      padding:18px;
      border:1.5px dashed #c7d2fe;
      border-radius:14px;
      text-align:center;
    }
  `;
  constructor() {
    super();
    this.list = [];
  }
  render() {
    return this.list.length ? html`
      <table>
        <thead><tr><th>N.º</th><th>Producto</th><th>Categoría</th><th>Precio</th></tr></thead>
        <tbody>${this.list.map(producto => html`
          <tr><td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.categoria}</td><td>$${producto.precio.toFixed(2)}</td></tr>
        `)}</tbody>
      </table>` : html`<p>Todavía no hay productos registrados.</p>`;
  }
}
customElements.define('wc-table-productos', TablaProductos);
