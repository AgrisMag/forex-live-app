import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../constants';
import SelectCurrency from '../select/select.component';

function Page() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selectCurrency, setSelectCurrency] = useState('');

    console.log(selectCurrency)
    const URL_KEY = `https://financialmodelingprep.com/api/v3/fx/EURUSD?apikey=8813ec2a91fb1d6a46c0de9f6bb67635`;

    // ${handleChange.replace('/', '')}

    useEffect(() => {
        fetch(URL_KEY)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                <h1>Forex live wall</h1>
                <SelectCurrency items={items} />
                {items.map(item => (
                    <tr>
                        <td>{item.ticker}</td>
                        <td>{item.bid}</td>
                        <td>{item.ask}</td>
                        <td>{item.open}</td>
                        <td>{item.low}</td>
                        <td>{item.high}</td>
                        <td>{item.changes}</td>
                        <td>{item.date}</td>
                    </tr>
                ))}
            </ul>
        );
    }
}

export default Page;