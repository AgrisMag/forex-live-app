import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY } from '../../constants';
import SelectCurrency from '../select/select.component';

function Page() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(API_KEY)
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
                    <li key={item.ticker}>
                        {item.ticker}{item.bid}{item.changes}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Page;