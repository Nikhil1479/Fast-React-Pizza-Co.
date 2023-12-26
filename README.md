
---

# Fast React Pizza Co. Documentation

## Overview

This documentation provides an in-depth understanding of the "Fast React Pizza Co." React application. The application simulates a pizza restaurant website and includes components for the header, menu, and footer.

## Components

### 1. **App Component**

The `App` component is the root component responsible for rendering the entire application. It includes the `Header`, `Menu`, and `Footer` components.

#### Usage:

```jsx
function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
```

### 2. **Header Component**

The `Header` component displays the restaurant's name in the header section of the webpage.

#### Usage:

```jsx
function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}
```

### 3. **Menu Component**

The `Menu` component is responsible for displaying the restaurant's menu. It dynamically renders pizza items from the provided `pizzaData` array. If no pizzas are available, it displays a corresponding message.

#### Usage:

```jsx
function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <div className='menu'>
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                    <ul className='pizzas'>
                        {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} />))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>Sorry, we're out of pizzas!</p>
            )}
        </div>
    );
}
```

### 4. **Pizza Component**

The `Pizza` component represents an individual pizza item on the menu. It receives a `pizzaObj` prop containing details such as name, ingredients, price, and availability. It conditionally displays a "SOLD OUT" tag if the pizza is not available.

#### Usage:

```jsx
function Pizza(props) {
    return (
        <div className={props.pizzaObj.soldOut ? 'pizza sold-out' : 'pizza'}>
            <img src={props.pizzaObj.photoName} alt="spinaci.jpg" />
            <li>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.soldOut ? 'SOLD OUT' : props.pizzaObj.price}</span>
            </li>
        </div>
    );
}
```

### 5. **Order Component**

The `Order` component displays information about the restaurant's operating hours and provides a button for placing an order.

#### Usage:

```jsx
function Order(props) {
    return (
        <div className='order'>
            <p>We're Open until {props.closeHours}:00 hrs. Come visit us or order online.</p>
            <button className='btn'>Order Now</button>
        </div>
    );
}
```

### 6. **Footer Component**

The `Footer` component checks the current time to determine if the restaurant is open or closed. It renders the `Order` component if the restaurant is open and displays a corresponding message if closed.

#### Usage:

```jsx
function Footer() {
    const hour = new Date().getHours();
    const openHours = 8;
    const closeHours = 24;
    const isOpen = hour >= openHours && hour < closeHours;

    return (
        <footer className='footer'>
            {isOpen ? (
                <Order openHours={openHours} closeHours={closeHours} />
            ) : (
                <p>Sorry, we're closed. We open at {openHours}:00 hrs.</p>
            )}
        </footer>
    );
}
```

## Data

The application uses pizza data stored in a separate file (`data.js`). This data includes information about various pizzas, such as name, ingredients, price, and availability.

#### Usage:

```jsx
import pizzaData from "./data";
```

## Running the Application

The application is rendered into the DOM using `ReactDOM.createRoot`. The root element with the ID 'root' is selected, and the `App` component is rendered inside a `React.StrictMode`.

#### Usage:

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

## Additional Notes

- The application uses conditional rendering to display messages based on the availability of pizzas and the restaurant's operating hours.
- The styling is achieved through CSS classes defined in an external stylesheet (`index.css`).

Feel free to customize and extend the application based on your needs.

---

This comprehensive documentation provides detailed insights into each component's purpose, usage, and functionality within the "Fast React Pizza Co." application.