import { LitElement, html, css } from 'lit';
import '../home/register.js';
import '../home/table.js';

export class Integracion extends LitElement {
  static properties = { lista: { state: true } };
  static styles = css`
    :host { display:block; max-width:1100px; margin:auto; padding:32px 20px; }
    header { margin-bottom:28px; }
    header p { color:#64748b; }
    h1 { margin:8px 0; }
    .contenido { display:grid; grid-template-columns:300px minmax(0,1fr); gap:24px; }
    section { background:white; border:1px solid #e2e8f0; border-radius:10px; padding:24px; min-width:0; }
    h2 { margin-top:0; font-size:20px; }
    @media(max-width:760px) { .contenido { grid-template-columns:1fr; } }
  `;
  constructor() {
    super();
    this.lista = [];
  }
  registrarProducto(event) {
    const { nombre, categoria, precio } = event.detail;
    const producto = { id: this.lista.length + 1, nombre, categoria, precio: Number(precio) };
    this.lista = [...this.lista, producto];
  }
  render() {
    return html`
      <header><p>Grupo 5 · Componentes Lit</p><h1>Gestión de productos</h1><p>Registro y listado de productos</p></header>
      <div class="contenido">
        <section><h2>Nuevo producto</h2><wc-form-producto @producto-registrado=${this.registrarProducto}></wc-form-producto></section>
        <section><h2>Productos registrados (${this.lista.length})</h2><wc-table-productos .list=${this.lista}></wc-table-productos></section>
      </div>
    `;
  }
}
customElements.define('wc-integracion', Integracion);
