import React from 'react';

const Remaining = (props) => {
    const { usedAmount, capacity } = props;
    return (
        <div className="remaining-div">
            <span>{capacity - usedAmount}</span> <span>gb left</span>
        </div>
    )
}

export default Remaining;
