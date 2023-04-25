
import './App.css';
import './ValidatedInput.css'
import ValidatedInput from './ValidatedInput.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ValidatedInput icon={'fa-xmark-large'}/>
        </div>
      </header>
    </div>

  );
}

export default App;
