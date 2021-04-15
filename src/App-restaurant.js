import "./App.css";
import burger from "./images/restaurant-burger.jpg";

function Header({ name }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  );
}
function Main({ adjective, dishes }) {
  return (
    <section>
      <p>We serve the most {adjective} foods!</p>
      {/* <img src="https://github.com/derrickmstrong.png" alt=""/> */}
      <img src={burger} height={250} alt="burger and milkshake" />
      <ul>
        {dishes.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </section>
  );
}
function Footer({ year }) {
  return (
    <footer>
      <p>&copy;{year} It's Good!</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Nick" />
      <Main adjective="AMAZING" dishes={dishObjects} />
      <Footer year={getYear()} />
    </div>
  );
}

export default App;

/**
 * Functions
 **/

// getYear
function getYear() {
  const d = new Date();
  return d.getFullYear();
}

/**
 * Variables
 **/
const dishes = ["Mac and Cheese", "Fries", "Burgers"];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish })); // Convert dishes array to object with specific id
