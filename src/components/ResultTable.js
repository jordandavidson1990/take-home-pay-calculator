import React from 'react'
import './ResultTable.css';

function ResultTable({ start, leftover, localeStringSpecs, uk, pension, incomeTotal, nationalInsuranceTotal }) {

    function yearly(amount) {
        return parseFloat(amount).toLocaleString(uk, localeStringSpecs)
    }

    function monthly(amount) {
        return (amount / 12).toLocaleString(uk, localeStringSpecs)
    }

    function weekly(amount) {
        return (amount / 52).toLocaleString(uk, localeStringSpecs)
    }
    function fourWeekly(amount) {
        const week = (amount / 52)
        return (week * 4).toLocaleString(uk, localeStringSpecs)
    }

    function daily(amount) {
        return (amount / 260).toLocaleString(uk, localeStringSpecs)
    }

    return (
        <table>
            <thead></thead>
            <caption>Take Home Breakdown</caption>
            <tbody>
                <tr>
                    <th></th>
                    <th>Yearly</th>
                    <th>Monthly</th>
                    <th>Four Weekly</th>
                    <th>Weekly</th>
                    <th>Daily</th>
                </tr >
                <tr>
                    <th>Gross Income:</th>
                    <td>{yearly(start)}</td>
                    <td>{monthly(start)}</td>
                    <td>{fourWeekly(start)}</td>
                    <td>{weekly(start)}</td>
                    <td>{daily(start)}</td>
                </tr>
                <tr>
                    <th>Pension Contributions:</th>
                    <td>{yearly(pension)}</td>
                    <td>{monthly(pension)}</td>
                    <td>{fourWeekly(pension)}</td>
                    <td>{weekly(pension)}</td>
                    <td>{daily(pension)}</td>
                </tr>
                <tr>
                    <th>Income Tax Payments:</th>
                    <td>{yearly(incomeTotal)}</td>
                    <td>{monthly(incomeTotal)}</td>
                    <td>{fourWeekly(incomeTotal)}</td>
                    <td>{weekly(incomeTotal)}</td>
                    <td>{daily(incomeTotal)}</td>
                </tr>
                <tr>
                    <th>National Insurance Payments:</th>
                    <td>{yearly(nationalInsuranceTotal)}</td>
                    <td>{monthly(nationalInsuranceTotal)}</td>
                    <td>{fourWeekly(nationalInsuranceTotal)}</td>
                    <td>{weekly(nationalInsuranceTotal)}</td>
                    <td>{daily(nationalInsuranceTotal)}</td>
                </tr>
                <tr>
                    <th>Take Home:</th>
                    <td>{yearly(leftover)}</td>
                    <td>{monthly(leftover)}</td>
                    <td>{fourWeekly(leftover)}</td>
                    <td>{weekly(leftover)}</td>
                    <td>{daily(leftover)}</td>
                </tr>
            </tbody>
        </table >
    )
}

export default ResultTable