import { LitElement, html, css } from 'lit';
import '../../externos/equipo-1/register.js'; // formulario del Grupo 1, copiado sin cambios
import '../home/register.js';
import '../home/table.js';
import './cliente-tabla.js';

export class Integracion extends LitElement {
  static properties = {
    lista: { state: true },
    clientes: { state: true },
  };
  static styles = css`
    :host {
      display:block;
      min-height:100vh;
      box-sizing:border-box;
      padding:40px 24px 64px;
      background:linear-gradient(160deg, #f5f3ff 0%, #faf9fe 50%, #ede9fe 100%);
      color:#2e1065;
      font-family:'Segoe UI', system-ui, sans-serif;
    }
    header {
      max-width:1120px;
      margin:0 auto 32px;
      padding:28px 32px;
      border-radius:20px;
      background:linear-gradient(135deg, #3b0764, #6d28d9);
      color:white;
      box-shadow:0 18px 40px -18px rgba(76,29,149,.45);
    }
    header .etiqueta { font-size:12px; letter-spacing:.18em; text-transform:uppercase; opacity:.8; margin:0; }
    h1 { margin:6px 0 4px; font-size:30px; font-weight:800; }
    header .subtitulo { margin:0; opacity:.9; }
    .contenido {
      max-width:1120px;
      margin:0 auto;
      display:grid;
      grid-template-columns:minmax(260px,340px) minmax(0,1fr);
      gap:24px;
      align-items:start;
    }
    .bloque { margin-top:24px; }
    section {
      background:rgba(255,255,255,.92);
      border:1px solid #ddd6fe;
      border-radius:18px;
      padding:26px;
      min-width:0;
      box-shadow:0 10px 30px -18px rgba(46,16,101,.3);
    }
    h2 {
      margin:0 0 18px;
      font-size:18px;
      font-weight:700;
      display:flex;
      align-items:center;
      gap:10px;
    }
    h2::before {
      content:"";
      width:10px;
      height:10px;
      border-radius:50%;
      background:#7c3aed;
      box-shadow:0 0 0 4px #ede9fe;
    }
    @media(max-width:820px) {
      .contenido { grid-template-columns:1fr; }
      h1 { font-size:24px; }
    }
  `;
  constructor() {
    super();
    this.lista = [];
    this.clientes = [];
  }
  registrarProducto(event) {
    const { nombre, categoria, precio } = event.detail;
    const producto = { id: this.lista.length + 1, nombre, categoria, precio: Number(precio) };
    this.lista = [...this.lista, producto];
  }
  // Adaptador: convierte el detail del Grupo 1 ({ name, lastName, email, age })
  // a nuestro modelo de cliente. Los datos se conservan; solo cambian los nombres.
  registrarCliente(event) {
    const { name, lastName, email, age } = event.detail ?? {};
    const cliente = {
      id: this.clientes.length + 1,
      nombre: String(name ?? '').trim(),
      apellido: String(lastName ?? '').trim(),
      correo: String(email ?? '').trim(),
      edad: Number(age),
    };
    if (!cliente.nombre || !cliente.apellido || !cliente.correo || !Number.isInteger(cliente.edad)) {
      return;
    }
    this.clientes = [...this.clientes, cliente];
  }
  render() {
    return html`
      <header><p class="etiqueta">Grupo 5 · Componentes Lit</p><h1>Gestión de productos</h1><p class="subtitulo">Registro y listado de productos y clientes</p></header>
      <div class="contenido">
        <section><h2>Nuevo producto</h2><wc-form-producto @producto-registrado=${this.registrarProducto}></wc-form-producto></section>
        <section><h2>Productos registrados (${this.lista.length})</h2><wc-table-productos .list=${this.lista}></wc-table-productos></section>
      </div>
      <div class="contenido bloque">
        <section><h2>Nuevo cliente (Grupo 1)</h2><wc-cliente-form @cliente-registrado=${this.registrarCliente}></wc-cliente-form></section>
        <section><h2>Clientes registrados (${this.clientes.length})</h2><wc-table-clientes .list=${this.clientes}></wc-table-clientes></section>
      </div>
    `;
  }
}
customElements.define('wc-integracion', Integracion);
