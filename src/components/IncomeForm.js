import React from 'react';

function IncomeForm() {

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target.income.value);
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label htmlFor="income">Enter Your Income...</label>
                <input type="number" placeholder="Income" min={0} step={500} id="income" />
                <input type="submit" value="Calculate" />
            </form>
        </>
    )
}

export default IncomeForm;