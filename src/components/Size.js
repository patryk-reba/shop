import React, { useContext, useState } from 'react'
import Context from "../Context"

function Size() {

    const { cartItems } = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    const [state, setState] = useState({ value: "a4" })


    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);


    function handleChange(event) {
        setState({ value: event.target.value });
    }

    function handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }


    return (

        <form onSubmit={handleSubmit} className="size-form">
            <label className="size-label">
                {`Size : `}
                <select value={state.value} onChange={handleChange}
                    className="size-select"
                >
                    <option value="a4">30x21 (A4)</option>
                    <option value="a3">48x33 (A3+)</option>
                    <option value="a2">59x42 (A2)</option>

                </select>
            </label>
            <p className="size-price">
                {state.value === "a4" ? "$9.99" :
                    state.value === "a3" ? "$19.99" :
                        "$34.99"}

            </p>
            {/* <input type="submit" value="Submit" className="size-submit-button"/> */}
        </form>
    );

}

export default Size