import './App.scss';
import Ticket from './components/Ticket/Ticket';
import team from './data/team';

const App = () => {

  return (
    <div className="App">
      <h1 class="title">Ticket Tracker</h1>
      <div class="ticket-display">
        <Ticket employeeArray={team}/>
      </div>
    </div>
  );
}

export default App;
