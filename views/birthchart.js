import html from "html-literal";

export default state => html`
  <section id="birthchart">
    <h2>birthchart page goes here</h2>
    ${state.positions}
    <!-- All of these inputs and the button goes inside of a FORM (order.js from class spa has one I can adapt for this) -->
    <form
      id="order"
      method="POST"
      action=
    >
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />
      </div>
      <div>
        <label for="day">Day</label>
        <input type="text" name="day" id="day" placeholder="Day" required />
        <label for="month">Month</label>
        <select id="month" name="month">
          <option value="month" hidden>Month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
        <label for="year">Year</label>
        <input type="text" name="year" id="year" placeholder="Year" maxlength="4" required />
      </div>
      <div>
        <label for="hour">Hour</label>
        <input type="text" name"hour" id="hour" min="0" max="23" maxlength="2" required />
        <label for="minute">Minute</label>
        <input type="text" name"minute" id="minute" min="0" max="59" maxlength="2" required />
      </div>
      <div>
        <label for="location">Location</label>
        <select id="location" name="location">
          <option value="location" hidden>Location</option>
          <option value="san francisco">San Francisco</option>
          <option value="dallas">Dallas</option>
          <option value="chicago">Chicago</option>
          <option value="seattle">Seattle</option>
          <option value="miami">Miami</option>
        </select>
      </div>
      <input type="submit" name="submit" value="Submit" />
    </form>
  </section>
`;
