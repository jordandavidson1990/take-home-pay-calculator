import React from 'react'
import './ResultTable.css';

function ResultTable({ leftover, localeStringSpecs, uk }) {
    const monthly = leftover / 12
    const weekly = leftover / 52
    const daily = leftover / 260

    return (
        <table>
            <thead></thead>
            <caption>Take Home Breakdown</caption>
            <tbody>
                <tr>
                    <th>Yearly</th>
                    <th>Monthly</th>
                    <th>Four Weekly</th>
                    <th>Weekly</th>
                    <th>Daily</th>
                </tr >
                <tr>
                    <td>{leftover.toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{monthly.toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{(weekly * 4).toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{weekly.toLocaleString(uk, localeStringSpecs)}</td>
                    <td>{daily.toLocaleString(uk, localeStringSpecs)}</td>
                </tr>
            </tbody>
        </table >
    )
}

export default ResultTable