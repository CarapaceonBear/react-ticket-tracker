import React, {useState} from 'react';
import "./Ticket.scss";

const Ticket = (props) => {
    const {employeeArray} = props;
    const [counter, setCounter] = useState(0);

    const updateCounter = (event) => {
        event.target.value === "+" ? setCounter(counter + 1) : setCounter(counter - 1);
    }

    const employeeList = employeeArray.map((employee => {
        return (
            <div className="ticket">
                <h2 className="ticket__name">{employee.name}</h2>
                <h2 className="ticket__role">{employee.role}</h2>
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
    }));


    return (
        <>{employeeList}</>
    )
}

export default Ticket