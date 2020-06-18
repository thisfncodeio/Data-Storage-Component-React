import React, { Component } from 'react';

class Slider extends Component {
    render() {
        const { usedAmount, capacity } = this.props;
        const width = (usedAmount / capacity) * 100;
        return (
            <div className="slider-div">
                <div className="slider">
                    <div className="progress-bar" style={{width: width + '%'}}></div>
                    {/* <div className="progress-bar-dot"></div> */}
                </div>
                <div className="labels">
                    <p>0 GB</p>
                    <p>{this.props.capacity} GB</p>
                </div>
            </div>
        )
    }
}

export default Slider;
