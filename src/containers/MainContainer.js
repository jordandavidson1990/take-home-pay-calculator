import React, { useState, useEffect } from 'react';
import IncomeForm from '../components/IncomeForm'
import ResultTable from '../components/ResultTable';

function MainContainer() {

    const [incomeTotal, setIncomeTotal] = useState(0)
    const [nationalInsuranceTotal, setNationalInsuranceTotal] = useState(0)
    const [leftover, setLeftover] = useState(0)
    const [start, setStart] = useState(0)

    useEffect(() => {
        getLeftoverTotal()
    })

    const calculateIncomeTax = (value) => {
        setStart(value)
        // basic tax, 20% of anything between 12,500 & 50,000
        if (value >= 12500.00 && value <= 50000.00) {
            let taxableAmount = value - 12500.00
            taxableAmount *= 0.2
            setIncomeTotal(taxableAmount)
        }
        // higher tax, 40% of anything between 50,001 & 150,000
        if (value > 50000.00 && value <= 150000.00) {
            // maximum tax in basic is 7,500
            if (value <= 100000.00) {
                let taxableAmount = 7500.00 + ((value - 50000.00) * 0.4)
                setIncomeTotal(taxableAmount)
            } else if (value > 100000.00) {
                // for every pound you earn above 100,000 you lost 60p 
                let higherEarn = value - 100000
                if (higherEarn > 25000) {
                    // by 125,000 you have paid the personal allowance back
                    higherEarn = 25000
                    higherEarn *= 0.6
                    let additional = value - 125000
                    // anything above this is back to the 40%
                    additional *= 0.4
                    const higherTaxableAmount = 27500 + higherEarn + additional
                    setIncomeTotal(higherTaxableAmount)
                } else {
                    higherEarn *= 0.6
                    // 27,500 is highest you get taxed up to 100,000
                    const higherTaxableAmount = 27500 + higherEarn
                    setIncomeTotal(higherTaxableAmount)
                }
            }
        }
        // Additional tax, 45% of anything above 150,000
        if (value > 150000) {
            // maximum tax in higher is 52,500
            let taxableAmount = ((value - 150000) * 0.45) + 52500
            setIncomeTotal(taxableAmount)
        }
        if (value < 12500) {
            setIncomeTotal(0)
        }
    }

    const calculateNationalInsurance = (value) => {

        // You can earn up to £8632 before paying national insurance
        // Basic rate of 12% applies before £50,024
        if (value > 8632 && value <= 50024) {
            let taxableAmount = value - 8632
            let niPayment = taxableAmount * 0.12
            setNationalInsuranceTotal(niPayment)
        } else if (value > 50024) {
            // higher rate of 2% applies after £50,024
            // maximum NI carried over is £4,966.68
            let taxableAmount = value - 50024
            let niPayment = (taxableAmount * 0.02) + 4966.68
            setNationalInsuranceTotal(niPayment)
        }
    }

    const calculate = (value) => {
        // debugger
        calculateNationalInsurance(value.income.value)
        calculateIncomeTax(value.income.value)
        // getLeftoverTotal(value)
    }

    const getLeftoverTotal = () => {
        // debugger
        const total = start - (parseFloat(incomeTotal) + parseFloat(nationalInsuranceTotal))
        setLeftover(total)
    }

    const localeStringSpecs = { maximumFractionDigits: 2, style: 'currency', currency: 'GBP' }

    const uk = 'en-uk';

    return (
        <>
            <h1>Take Home Pay</h1>
            <IncomeForm calculate={calculate} />
            <p>Starting amount: {parseFloat(start).toLocaleString(uk, localeStringSpecs)}</p>
            <p>The amount of tax you will pay per year is {incomeTotal.toLocaleString(uk, localeStringSpecs)}</p>
            <p>The amount of National Insurance per year you pay is {nationalInsuranceTotal.toLocaleString(uk, localeStringSpecs)}</p>
            <p>You are left with: {leftover.toLocaleString(uk, localeStringSpecs)}</p>
            <p>Per Month you are left with: {((leftover / 12).toLocaleString(uk, localeStringSpecs))}</p>
            <ResultTable leftover={leftover} localeStringSpecs={localeStringSpecs} uk={uk} />
        </>
    )
}

export default MainContainer;