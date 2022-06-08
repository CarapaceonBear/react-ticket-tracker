import React, {useState} from 'react';
import './TicketContainer.scss';
import Ticket from '../Ticket/Ticket';




const TicketContainer = (props) => {
    const {team} = props;

    const employees = team.map((employee) => {
        return <Ticket name={employee.name} role={employee.role} />
      })

    return (
        <div className="TicketContainer">
          <h1 className="title">Ticket Tracker</h1>
          <div className="ticket-display">
            {employees}
          </div>
        </div>
      );
}

export default TicketContainer