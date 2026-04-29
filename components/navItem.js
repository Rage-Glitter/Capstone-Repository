import html from "html-literal";

export default item => html`
  <li><a href="${item.url}" data-navigo>${item.text}</a></li>
`;
