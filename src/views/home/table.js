import { LitElement, html, css } from 'lit';

export class TablaProductos extends LitElement {
  static properties = { list: { type: Array } };
  static styles = css`
    :host { display:block; overflow-x:auto; }
    table { border-collapse:collapse; width:100%; text-align:left; }
    th, td { padding:13px 10px; border-bottom:1px solid #e2e8f0; }
    th { background:#f1f5f9; }
    p { color:#64748b; }
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
