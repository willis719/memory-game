import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
   
    constructor(props) {
        super(props)
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
        if (this.props.isFlipped) {
            innerClass += " flipped"
        }

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img className="Card" src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt="dc cards"/>
                    </div>
                    <div className="MemoryCard_front">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        )
    }
}


export default MemoryCard