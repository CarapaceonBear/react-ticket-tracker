import React from 'react';
import "./Ticket.scss";

const Ticket = (props) => {
    const {employee} = props;

    return (
        <div class="ticket">
            <h2 class="ticket__name">{employee.name}</h2>
            <h2 class="ticket__role">{employee.role}</h2>
            <div class="ticket__counter">
                <h2 class="ticket__counter--text">Counter</h2> 
                <h2 class="ticket__counter--number">0</h2>
                <div class="ticket__counter--button-box">
                    <button class="ticket__counter--button" id="button-minus">-</button> 
                    <button class="ticket__counter--button" id="button-plus">+</button>  
                </div>
            </div>    
        </div>
    )
}

export default Ticket