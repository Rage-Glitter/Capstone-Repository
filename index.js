import { header, nav, main, footer } from "./components";
import * as store from "./store";
import * as views from "./views";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
    ${header(state)}
    ${nav(store.nav)}
    ${main(state)}
    ${footer()}
  `;
}

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
      // New Case for the Home View

      case "home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then(response => {
            // Create an object to be stored in the Home state from the response
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
      // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: match => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    router.updatePageLinks();

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
      document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });

    if (view === "birthchart") {
      // Add an event handler for the submit button on the form
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        // Get the form element (getting the info from the form)
        const inputList = event.target.elements;
        // console.log("Input Element List", inputList);

        // Create a request body object to send to the API (this cuts out having to repeat the above section for each section below)(the following are keys followed by the values. key value pairs. )
        const requestData = {
          name: inputList.name.value,
          day: inputList.day.value,
          month: inputList.month.value,
          year: inputList.year.value,
          hour: inputList.hour.value,
          minute: inputList.minute.value,
          location: inputList.location.value
        };
        // Log the request body to the console
        console.log("request Body", requestData);

        let date = `${requestData.year}-${requestData.month}-${requestData.day}`;
        let time = `${requestData.hour}:${requestData.minute}:00`;
        let lng = "-84.39733";
        let lat = "33.775867";
        let elevation = "1";


        const authString = btoa(`${process.env.ASTRONOMY_APP_ID}:${process.env.ASTRONOMY_APP_SECRET}`);
         axios
      .get(
        `https://api.astronomyapi.com/api/v2/bodies/positions?longitude=${lng}&latitude=${lat}&elevation=${elevation}&from_date=${date}&to_date=${date}&time=${time}`,
        {
          headers: { Authorization: `Basic ${authString}` }
        }
      ).then(response => {
        console.log(response.data);
        store.birthchart.positions=response.data;

      }).catch(err => {
            console.log(err);

          });

      });
    }
  }
});



router
  .on({
    "/": () => render(),
    "/:view": function (match) {
      const view = match?.data?.view ? camelCase(match.data.view) : "home";

      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
