import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//The first example shows how something can be passed by render.
ReactDOM.render("Hello world", document.getElementById("example"));

//Second example shows how we can pass a larger value by assigning a variable to it.
const element = <h1>This is a basic example for 255</h1>
ReactDOM.render(element, document.getElementById("example2"))

//Third example shows how an entire webpage can be created inside and passed through one variable. We do this by creating empty opening and closing tags.
const element2 = <>
<h1>This is a basic example within a single variable</h1>
<p>What does it look like to have everything in one variable?</p>
<p>It looks like this.</p>
</>
ReactDOM.render(element2, document.getElementById("example3"))

//Fourth example
//All of this is created much easier, and with more repeatability by creating a function component.
//Within functions we can have JS.
function Webpage() {
    const name = "Doug"

    return <section>
        <header>
            <h1>Function example!</h1>
            <p>Hello {name}!</p>
            <p>At last! Another example!</p>
        </header>
    </section>
}

ReactDOM.render(<Webpage />,document.getElementById("example4"))

//Fifth example
const root = ReactDOM.createRoot(document.getElementById('example5'));
root.render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
);
