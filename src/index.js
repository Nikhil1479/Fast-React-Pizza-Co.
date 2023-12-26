import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import pizzaData from "./data";


function Pizza(props) {
    if (props.pizzaObj.soldOut) return null;
    return (
        <div className='pizza'>
            <img src={props.pizzaObj.photoName} alt="spinaci.jpg" />
            <li>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price}</span>
            </li>
        </div>);
}

function Header() {
    return (
        <header className='header'>
            <h1> Fast React Pizza Co. </h1>
        </header>
    )
}

function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    // const numPizzas = 0

    return (
        <div className='menu'>
            <h2> Our Menu </h2>

            {
                numPizzas > 0 ? (
                    <ul className='pizzas'>
                        {/*`{pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} />))}` is mapping over the
                `pizzaData` array and creating a new `Pizza` component for each item in the array.
                It is passing each pizza object as a prop called `pizzaObj` to the `Pizza`
                component. This allows the `Pizza` component to render the details of each pizza,
                such as the name, ingredients, and price. */}
                        {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} />))}
                    </ul>
                ) : (<p>Sorry, we're out of pizzas!</p>)
            }

        </div >
    );
}

function Order(props) {
    return (
        <div className='order'>
            <p>We're Open until {props.closeHours}:00 hrs.Come visit us or order online.</p>
            <button className='btn'>Order Now</button>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHours = 8;
    const closeHours = 24;
    const isOpen = hour >= openHours && hour < closeHours;

    console.log(isOpen)
    return (
        <footer className='footer'>

            {/* /* The code is checking the value of the variable `isOpen`. If `isOpen` is true, it renders
            a `<div>` with the class name 'order'. Inside the `<div>`, it displays a paragraph
            saying "We're Open until {closeHours}:00 hrs. Come visit us or order online." and a
            button with the class name 'btn' saying "Order Now". */}

            {
                isOpen ? <Order openHours={openHours} closeHours={closeHours} /> : (<p>Sorry, we're closed. We open at {openHours}:00 hrs.</p>)
            }
        </footer>
    );
}


function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);