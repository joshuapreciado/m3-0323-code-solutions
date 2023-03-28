import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton className="ButtonColor" text="I" />
        <CustomButton className="ButtonColor2" text="know" />
        <CustomButton className="ButtonColor3" text="React!" />
      </header>
    </div>
  );
}

export default App;
