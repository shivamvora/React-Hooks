import './App.css';
import CounterHook from './CounterHook';
import SimpleFormHook from './SimpleFormHook';
import Toggler from './Toggler';
import SimpleFormInputHook from './SimpleFormInputHook';


function App() {
  return (
    <div className="App">
      
      <CounterHook/>
      <Toggler/>
      <SimpleFormHook/>
      <SimpleFormInputHook/>
    </div>
  );
}

export default App;
