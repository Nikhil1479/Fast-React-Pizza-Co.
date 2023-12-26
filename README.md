# Fast React Pizza Co. Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Components](#components)
   - [Pizza Component](#pizza-component)
   - [Header Component](#header-component)
   - [Menu Component](#menu-component)
   - [Footer Component](#footer-component)
   - [App Component](#app-component)
3. [Root Rendering](#root-rendering)

---

## 1. Introduction <a name="introduction"></a>

Welcome to the Fast React Pizza Co. documentation! This React application showcases a pizza menu for a fictional pizza company. The code is organized into components, each serving a specific purpose in the application.

## 2. Components <a name="components"></a>

### a. Pizza Component <a name="pizza-component"></a>

The `Pizza` component represents an individual pizza item in the menu. It receives a `pizzaObj` prop containing information about the pizza, such as its name, ingredients, price, and availability.

```jsx
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
        </div>
    );
}
