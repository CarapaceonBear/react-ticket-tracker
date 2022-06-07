import './App.scss';
import Ticket from './components/Ticket/Ticket';
import team from './data/team';

const App = () => {

  return (
    <div className="App">
      <h1 class="title">Ticket Tracker</h1>
      <div class="ticket-display">
        <Ticket employee={team[0]}/>
        <Ticket employee={team[1]}/>
        <Ticket employee={team[2]}/>
        <Ticket employee={team[3]}/>
        <Ticket employee={team[4]}/>
        <Ticket employee={team[5]}/>
        <Ticket employee={team[6]}/>
        <Ticket employee={team[7]}/>
        <Ticket employee={team[8]}/>
        <Ticket employee={team[9]}/>
      </div>
    </div>
  );
}

export default App;
