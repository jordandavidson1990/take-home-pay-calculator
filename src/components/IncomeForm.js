import React from 'react';

function IncomeForm({ calculate }) {

    const handleClick = (e) => {
        e.preventDefault();

        calculate(e.target.income.value);
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label htmlFor="income">Enter Your Income...</label>
                <input type="number" placeholder="Income" min={0} step={1} id="income" />
                <input type="submit" value="Calculate" />
            </form>
        </>
    )
}

export default IncomeForm;