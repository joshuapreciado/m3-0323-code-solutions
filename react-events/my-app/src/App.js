import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton onCustomClick={(text) => alert(`You clicked this color Pink`)} className="ButtonColor" color='Pink' text="Pink" />
          <CustomButton onCustomClick={(text) => alert(`You clicked this color Red`)} className="ButtonColor2" color='Red' text="Red" />
          <CustomButton onCustomClick={(text) => alert(`You clicked this color Cyan`)} className="ButtonColor3" color='Cyan' text="Cyan" />
        </div>
      </header>
    </div>
  );
}


export default App;
