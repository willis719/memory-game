import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
   
    constructor() {
        super()
        this.state = {
            isFlipped: false
        };
    }

    clickHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render() {

        let innerClass = "MemoryCard_inner"
        if (this.state.isFlipped === true) {
            innerClass += " flipped"
        }

        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img className="Card" src="https://www.digitalcrafts.com/img/logo-wrench-white.png" />
                    </div>
                    <div className="MemoryCard_front">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}


export default MemoryCard