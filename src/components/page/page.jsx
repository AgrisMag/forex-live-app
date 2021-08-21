import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY } from '../constants';

function MyComponent() {
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

                {items.map(item => (
                    <li key={item.ticker}>
                        {item.ticker}{item.bid}{item.changes}
                    </li>
                ))}
            </ul>
        );
    }
}

export default MyComponent;