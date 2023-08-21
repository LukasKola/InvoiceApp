import { useFetchInvoice } from '../src/utils/hooks/useFetchInvoices'
import './App.css';
import { Invoices } from './components/Invoices'

function App() {
  const { invoices } = useFetchInvoice()

  return (
    <div className="App">
      <header className="App-header">
        {invoices &&
          <Invoices invoices={invoices} />
        }
      </header>
    </div>
  );
}

export default App;
