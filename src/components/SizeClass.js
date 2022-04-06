import React, { useContext } from 'react'
import Context from "../Context"

class Size extends React.Component {
    constructor(props) {
        const { cartItems } = useContext(Context)
        const totalCost = 5.99 * cartItems.length
        const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="size-form">
                <label className="size-label">
                    {`Size : `}
                    <select value={this.state.value} onChange={this.handleChange}
                        className="size-select"
                    >
                        <option value="grapefruit">30x21 (A4)</option>
                        <option value="lime">48x33 (A3+)</option>
                        <option value="coconut">59x42 (A2)</option>

                    </select>
                </label>
                <p className="total-cost">Total: {totalCostDisplay}</p>
                {/* <input type="submit" value="Submit" className="size-submit-button"/> */}
            </form>
        );
    }
}

export default Size