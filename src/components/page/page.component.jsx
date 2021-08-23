import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY } from '../../constatnts';
import './page.styles.css'

function Page() {
    const [items, setItems] = useState([]);
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/fx?apikey=${API_KEY}`)
            .then(res => res.json())
            .then(result => setCurrency(result))
    }, []);


    const handlechange = e => {
        e.preventDefault();
        let currency = e.target.value;
        let result = currency.replace('/', '')
        const URL_KEY = `https://financialmodelingprep.com/api/v3/fx/${result}?apikey=${API_KEY}`;
        fetch(URL_KEY)
            .then(res => res.json())
            .then(
                (result) => setItems(result)
            )
    }
    return (
        <div className="page">
            <h1>Forex live wall</h1>
            <form >
                <label>
                    Select currency:
                    <select onChange={handlechange}>
                        {currency.map(item => (
                            <option key={item.ticker} value={item.ticker}>{item.ticker}</option>
                        ))}
                    </select>
                </label>
            </form>
            {items.map(item => (
                <table>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Bid</th>
                            <th>Ask</th>
                            <th>Open</th>
                            <th>Low</th>
                            <th>High</th>
                            <th>Changes</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td key="1">{item.ticker}</td>
                            <td key="2">{item.bid}</td>
                            <td key="3">{item.ask}</td>
                            <td key="4">{item.open}</td>
                            <td key="5">{item.low}</td>
                            <td key="6">{item.high}</td>
                            <td key="7">{item.changes}</td>
                            <td key="8">{item.date}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default Page;