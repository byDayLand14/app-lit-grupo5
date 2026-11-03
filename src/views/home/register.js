import { LitElement, html, css } from 'lit';

export class FormProducto extends LitElement {
  static styles = css`
    :host { display:block; }
    form { display:grid; gap:14px; }
    label { display:grid; gap:6px; font-weight:600; font-size:14px; color:#312e81; }
    input {
      padding:12px 14px;
      border:1.5px solid #c7d2fe;
      border-radius:12px;
      font:inherit;
      background:#fff;
      min-width:0;
      transition:border-color .2s, box-shadow .2s;
    }
    input:focus { outline:none; border-color:#6366f1; box-shadow:0 0 0 4px #e0e7ff; }
    button {
      margin-top:6px;
      background:linear-gradient(135deg, #6366f1, #0891b2);
      color:white;
      border:0;
      padding:13px;
      border-radius:999px;
      font:inherit;
      font-weight:700;
      cursor:pointer;
      box-shadow:0 10px 20px -10px rgba(79,70,229,.7);
    }
    button:hover { filter:brightness(1.06); }
  `;

  registrar(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const datos = new FormData(form);
    this.dispatchEvent(new CustomEvent('producto-registrado', {
      detail: { nombre: datos.get('nombre').trim(), categoria: datos.get('categoria').trim(), precio: Number(datos.get('precio')) },
      bubbles: true,
      composed: true
    }));
    form.reset();
  }

  render() {
    return html`
      <form @submit=${this.registrar}>
        <label>Nombre<input name="nombre" required></label>
        <label>Categoría<input name="categoria" required></label>
        <label>Precio ($)<input name="precio" type="number" min="0" step="0.01" required></label>
        <button type="submit">Registrar producto</button>
      </form>
    `;
  }
}
customElements.define('wc-form-producto', FormProducto);
