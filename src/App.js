import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("My name is " + name);
  };

  return (
    <div className="App">
      <h1>Answer the Following Questions</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>What is your name?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
