import html from "html-literal";

export default state => html`
  <header>
    <h1>The Astronomical Astrology App</h1>
    <p>This is a paragraph${state.header}</p>
  </header>
`;
