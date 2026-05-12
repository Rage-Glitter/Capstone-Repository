import html from "html-literal";

export default item => html`
  <li>
    <a href="${item.url}" data-navigo class="shadow-pop-tr">
      ${item.text}
    </a>
  </li>
`;
