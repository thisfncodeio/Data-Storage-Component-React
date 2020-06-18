import React, { Component } from 'react';
import Slider from './Slider';
import Remaining from './Remaining';

class Capacity extends Component {
    state = {
        capacity: 1000,
        usedAmount: 815
    }

    onInputChange = (e) => {
        let newAmount = parseInt(e.target.value) || 0;

        (newAmount > 1000) && (newAmount = 1000);

        this.setState({
            usedAmount: newAmount
        }, () => console.log(this.state.usedAmount));
    }

    render() {
        const { capacity, usedAmount } = this.state;
        return (
            <div className="capacity-div">
                <p>You've used 
                    <span>
                        <input 
                            type="number"
                            value={usedAmount}
                            onChange={this.onInputChange}
                            maxLength={4}
                            min={0}
                            max={capacity}
                        /> GB&nbsp;
                    </span> of your storage
                </p>
                <Slider usedAmount={usedAmount} capacity={capacity} />
                <Remaining usedAmount={usedAmount} capacity={capacity} />
            </div>
        )
    }
}

export default Capacity;
