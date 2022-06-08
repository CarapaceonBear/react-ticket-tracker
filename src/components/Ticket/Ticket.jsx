import React, {useState} from 'react';
import "./Ticket.scss";

const Ticket = (props) => {
    const {name, role} = props;
    const [counter, setCounter] = useState(0);

    const updateCounter = (event) => {
        if (event.target.value === "+") {
            setCounter(counter + 1);
        } else if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="ticket">
            <h2 className="ticket__name">{name}</h2>
            <h2 className="ticket__role">{role}</h2>
            <div className="ticket__counter">
                <h2 className="ticket__counter--text">Counter</h2> 
                <h2 className="ticket__counter--number">{counter}</h2>
                <div className="ticket__counter--button-box">
                    <button className="ticket__counter--button" id="button-minus" onClick={updateCounter} value="-">-</button> 
                    <button className="ticket__counter--button" id="button-plus" onClick={updateCounter} value="+">+</button>  
                </div>
            </div>   
        </div>
    )
}

export default Ticket