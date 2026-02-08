import { LitElement, html, css } from 'lit';

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
      bgcolor: { type: String }
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
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: Arial, sans-serif;
      }

      .card {
        max-width: 400px;
        border: 1px solid #ccc;
        border-radius: 8px;
        margin: 16px auto;
        padding: 16px;
        box-sizing: border-box;
        
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
      }

      .card_desc {
        margin: 0 0 12px;
        font-size: 14px;
        line-height: 1.4;
      }

      .card_button {
        text-decoration: none;
        padding: 8px 12px;
        border: 1px solid #333;
        border-radius: 6px;
        color: #333;
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

  render() {
    return html`
      <section class="card" style="background:${this.bgcolor}">
        <img class="card_img" src="${this.imgSrc}" alt="Sample image" />

        <div class="card_body">
          <h2 class="card_title">${this.title}</h2>

          <p class="card_desc">${this.desc}</p>

          <a class="card_button" href="${this.link}" target="_blank" rel="noopener">
            Details
          </a>
        </div>
      </section>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
