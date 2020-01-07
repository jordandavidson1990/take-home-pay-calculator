import React, { useState } from 'react';
import IncomeForm from '../components/IncomeForm'

function MainContainer() {

    const [total, setTotal] = useState(0)

    const calculate = (value) => {
        // Basic tax, 20% of anything between 12,500 & 50,000
        if (value >= 12500.00 && value <= 50000.00) {
            const taxableAmount = value - 12500.00
            setTotal(taxableAmount * 0.2)
        }
        // Higher tax, 40% of anything between 50,001 & 150,000
        if (value > 50000.00 && value <= 150000.00) {
            // maximum tax in basic is 7,500
            if (value <= 100000.00) {
                let taxableAmount = 7500.00 + ((value - 50000.00) * 0.4)
                setTotal(taxableAmount)
            } else if (value > 100000.00) {
                // for every pound you earn above 100,000 you lost 60p 
                let higherEarn = value - 100000
                if (higherEarn > 25000) {
                    higherEarn = 25000
                    higherEarn *= 0.6
                    let additional = value - 125000
                    additional *= 0.4
                    const higherTaxableAmount = 27500 + higherEarn + additional
                    setTotal(higherTaxableAmount)
                } else {
                    higherEarn *= 0.6
                    // 27,500 is highest you get taxed up to 100,000
                    const higherTaxableAmount = 27500 + higherEarn
                    setTotal(higherTaxableAmount)
                }
            }
        }
        // Additional tax, 45% of anything above 150,000
        // if (value > 150000) {
        //     // maximum tax in higher is 39,999.6
        //     // 7,500 (basic max) + 39,999.6(higher max) = 47,499.6
        //     const taxableAmount = 47499.6 + ((value - 150000) * 0.45)
        //     setTotal(taxableAmount)
        // }
        // if (value < 12500) {
        //     setTotal(0)
        // }

    }

    return (
        <>
            <IncomeForm calculate={calculate} />
            <p>The amount of tax you will pay per year is £{total}</p>
        </>
    )
}

export default MainContainer;