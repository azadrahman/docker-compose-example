import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Update <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          From API Fetch: {message}
        </a>
      </header>
    </div>
  );
}

export default App;
