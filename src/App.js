
import { useState } from 'react';
import './App.css';

function App() {
  const [index, setIndex] = useState(0)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Radio-buttons</h1>
        <div className="buttonGroup">
          <button onClick={() => setIndex(0)} disabled={index === 0}>Val</button>
          <button onClick={() => setIndex(1)} disabled={index === 1}>Val2</button>
          <button onClick={() => setIndex(2)} disabled={index === 2}>Val3</button>
          <button onClick={() => setIndex(3)} disabled={index === 3}>Val4</button>
        </div>

        <br></br>
        <div>
          Index: {index}
        </div>
      </header>
    </div>
  );
}

export default App;
