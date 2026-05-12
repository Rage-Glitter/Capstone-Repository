import html from "html-literal";

export default state => html`
  <section id="home">
    <h2>Get in loser...we're doing sidereal astrology.</h2>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
    <!-- ADD: The Sun is in [CONSTELLATION].
     The Moon is in [CONSTELLATION].
     Moon Phase: [MOON PHASE] -->
  </h3>
`;
