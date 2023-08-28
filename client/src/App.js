
import './App.css';
import { Invoices } from './components/Invoices'
import { useInvoiceContext} from './utils/context/invoicesContext'

function App() {
  const {invoicesForYears} = useInvoiceContext()

  return (
    <div className="App">
      <header className="App-header">
        {invoicesForYears &&
          <Invoices invoices={invoicesForYears} />
        }
       
      </header>
    </div>
  );
}

export default App;
