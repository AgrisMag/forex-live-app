import React from 'react';

function SelectCurrency(props) {
    const { items } = props;
    return (
        <select>
            {items.map(option => (
                <option key={option.ticker} value={option.ticker}>{option.ticker}</option>
            ))}
        </select>
    )
}

export default SelectCurrency;