import './App.scss';
// import Ticket from './components/Ticket/Ticket';
import TicketContainer from './components/TicketContainer/TicketContainer';
import team from './data/team';


const App = () => {

  return (
    <div className="App">
      <TicketContainer team={team} />
    </div>
  );
}

export default App;
