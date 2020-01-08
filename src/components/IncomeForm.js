import React from 'react';

function IncomeForm({ calculate }) {

    const handleClick = (e) => {
        e.preventDefault();
        calculate(e.target);

    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label htmlFor="income">Enter Your Income...£</label>
                <input type="number" placeholder="Income" min={0} step={0.01} id="income" />
                <label htmlFor="pension">Your pension contribution...</label>
                <input type="number" placeholder="Choose your pension contribution..." min={0} max={100} id="pension" />
                <input type="submit" value="Calculate" />
            </form>
        </>
    )
}

export default IncomeForm;