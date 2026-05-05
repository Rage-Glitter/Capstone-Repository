import html from "html-literal";

export default state => html`
  <section id="birthchart">
    <h2>birthchart page goes here</h2>
    ${state.positions}
    <!-- All of these inputs and the button goes inside of a FORM (order.js from class spa has one I can adapt for this) -->
    <!-- <form id="order" method="POST" action="https://sc-pizza-api.onrender.com/pizzas/form">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
      </div>
      <div>
        <label for="Day">Day</label>
        <input
          type="text"
          name="day"
          id="day"
          placeholder="Day"
          required
        />
      </div>
      <div>
        <label for="month">Month</label>
        <select id="month" name="month">
          <option value="month" hidden>Month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March Dish</option>
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
      </div>
      <div>
        <label for="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="Year"
          required
        />
      </div>
      <div id="toppings-wrapper">
        <b>Toppings:</b>
        <input
          type="checkbox"
          id="chicken-toppings-checkbox"
          name="toppings"
          value="Chicken"
        />
        <label for="chicken-toppings-checkbox">Chicken</label>
        <input
          type="checkbox"
          id="pepperoni-toppings-checkbox"
          name="toppings"
          value="pepperoni"
        />
        <label for="pepperoni-toppings-checkbox">Pepperoni</label>
        <input
          type="checkbox"
          id="ham-toppings-checkbox"
          name="toppings"
          value="ham"
        />
        <label for="ham-toppings-checkbox">Ham</label>
        <input
          type="checkbox"
          id="onion-toppings-checkbox"
          name="toppings"
          value="onion"
        />
        <label for="onion-toppings-checkbox">Onion</label>
        <input
          type="checkbox"
          id="mushroom-toppings-checkbox"
          name="toppings"
          value="mushroom"
        />
        <label for="mushroom-toppings-checkbox">Mushroom</label>
        <input
          type="checkbox"
          id="cheese-toppings-checkbox"
          name="toppings"
          value="extra cheese"
        />
        <label for="cheese-toppings-checkbox">Extra Cheese</label>
      </div>
      <input type="submit" name="submit" value="Submit Pizza" />
    </form> -->
  </section>
`;
