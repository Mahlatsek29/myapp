import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("My name is " + name);
  };

  const handleDelete = () => {
    setName(''); // Clear the name field
  };

  return (
    <div className="App">
      <h1>Answer the Following Question</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>What is your name?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
        <button onClick={handleDelete}>Delete</button>
        <br/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
        <button onClick={handleDelete}>Delete</button>
        <br/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
        <button onClick={handleDelete}>Delete</button>
      </form>
      
    </div>
  );
}

export default App;
