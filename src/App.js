import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nSurname: ${surname}\nAge: ${age}`);
  };

  const handleDelete = () => {
    setName('');
    setSurname('');
    setAge('');
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'powderblue', // Set background color to powder blue
  };

  const formStyle = {
    display: 'inline-block',
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '16px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '20px' }}>Answer the Following Questions</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>What is your Name?</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="surname" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>What is your Surname?</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="age" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>How old are you?</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <button type="submit" style={buttonStyle}>Submit</button>
          <button type="button" onClick={handleDelete} style={buttonStyle}>Delete</button>
        </div>
      </form>
    </div>
  );
}

export default App;
