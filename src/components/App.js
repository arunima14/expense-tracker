import '../App.css';
import Header from './Header';
import BalanceSheet from './BalanceSheet'; 
import TransactionHistory from './TransactionHistory';
import AddNewTransaction from './NewTransaction';
import { GlobalProvider } from '../context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header /> 
        <BalanceSheet />
        <TransactionHistory />
        <AddNewTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
