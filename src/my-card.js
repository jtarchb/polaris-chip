import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      imgSrc: { type: String, attribute: 'imgsrc' },
      desc: { type: String },
      link: { type: String },
      bgcolor: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Nittany Lion Shrine';
    this.imgSrc = 'https://tinyurl.com/4ba2vhpx';
    this.desc =
      'The shrine is a gift of the class of 1940 and rests in a natural setting of trees near Recreation Building. Animalier Heinz Warneke and stonecutter Joseph Garatti created it from a 13-ton block of Indiana limestone.';
    this.link = 'https://hax.psu.edu';
    this.bgcolor = '#ffffff';
    this.fancy = false; 
  }

  static get styles() {
    return css`
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .card {
        height: 420px;
        width: 400px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin: 16px;
        padding: 16px;
        box-sizing: border-box;
        display: inline-block;
      }

      .card_img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
        border-radius: 8px;
        margin: 0 0 12px;
      }

      .card_body {
        padding: 8px 0;
      }

      .card_title {
        margin: 0 0 8px;
        font-size: 20px;
        text-decoration: underline;
      }

      .card_desc {
        margin: 0 0 12px;
        font-size: 14px;
        line-height: 1.4;
      }

      .card_button {
        text-decoration: none;
        padding: 8px 12px;
        border-radius: 6px;
        background-color: #ffffff;
        color: #000000;
        border: 2px solid #000000;
        font-weight: 600;
        display: inline-block;
      }

      @media (max-width: 500px) {
        .card {
          max-width: 92%;
          padding: 12px;
          margin: 12px auto;
        }

        .card_img {
          height: 160px;
        }

        .card_title {
          font-size: 18px;
        }

        .card_desc {
          font-size: 13px;
        }
      }
    `;
  }

  openChanged(e) {
    this.fancy = e.target.open;
  }

  updated(changedProps) {
    if (changedProps.has('fancy')) {
      const details = this.renderRoot?.querySelector('details');
      if (details && details.open !== this.fancy) {
        details.open = this.fancy; 
      }
    }
  }

  render() {
    return html`

    
      <section class="card" style="background:${this.bgcolor}">
        <meme-maker
          image-url="${this.imgSrc}"
          top-text="${this.title}"
          bottom-text="Hax PSU">
        </meme-maker>
        <div class="card_body">
          <h2 class="card_title">${this.title}</h2>

          <details
            ?open=${this.fancy}
            class="card_desc"
            @toggle=${this.openChanged}
          >
            <summary>Description</summary>
            <div>
              <slot>${this.desc}</slot>
            </div>
          </details>

          <a class="card_button" href="${this.link}" target="_blank" rel="noopener">
            Details
          </a>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
