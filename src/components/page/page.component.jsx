import React from 'react';
import { useState } from 'react';

function Page() {
    const [items, setItems] = useState([]);


    const handlechange = e => {
        let currency = e.target.value;
        const URL_KEY = `https://financialmodelingprep.com/api/v3/fx/${currency}?apikey=8813ec2a91fb1d6a46c0de9f6bb67635`;
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
                        <option value="EURUSD">EURUSD</option>
                        <option value="USDJPY">USDJPY</option>
                        <option value="GBPUSD">GBPUSD</option>
                        <option value="EURGBP">EURGBP</option>
                    </select>
                </label>
            </form>
            {items.map(item => (
                <table>
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
                </table>
            ))}
        </div>
    );
}

export default Page;