import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    alert('I hope this is enough!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi! Welcome to the jungle.</h1>
        <button onClick={handleClick} className="App-button">
          Click Me to get into it!
        </button>
      </header>
    </div>
  );
}

export default App;
