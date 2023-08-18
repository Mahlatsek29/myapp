import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("My name is " + name);
  };

  const handleDelete = () => {
    setName(''); 
  };

  return (
    <div className="App">
      <h1>This is The Dev</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>What is your Name?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
        <button onClick={handleDelete}>Delete</button>
        <br/>
        <div>What is your Surname?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
        <button onClick={handleDelete}>Delete</button>
        <br/>
        <div> How old are you?</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
        <button onClick={handleDelete}>Delete</button>
      </form>
      
    </div>
  );
}

export default App;
