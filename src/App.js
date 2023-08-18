import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [isEditing, setIsEditing] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      
      setIsEditing(false);
    } else {
      
      alert(`Name: ${name}\nSurname: ${surname}\nAge: ${age}`);
    }
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'powderblue', 
  };

  const formStyle = {
    display: 'inline-block',
    textAlign: 'left',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
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
      <h1 style={{ marginBottom: '20px' }}>This is the Main</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>What is your Name?</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            readOnly={!isEditing}
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
            readOnly={!isEditing}
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
            readOnly={!isEditing}
          />
        </div>
        <div>
          {isEditing ? (
            <button type="submit" style={buttonStyle}>Save</button>
          ) : (
            <button type="submit" style={buttonStyle}>Submit</button>
          )}
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)} 
            style={buttonStyle}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
