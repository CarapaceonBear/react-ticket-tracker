import './App.scss';
import Ticket from './components/Ticket/Ticket';
import team from './data/team';

const employees = team.map((employee) => {
  return <Ticket name={employee.name} role={employee.role} />
})


const App = () => {

  return (
    <div className="App">
      <h1 className="title">Ticket Tracker</h1>
      <div className="ticket-display">
        {employees}
      </div>
    </div>
  );
}

export default App;
