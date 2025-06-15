import { useState } from 'react';
import '/src/style.css'
const App = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    roll: ""
  });

  const [entries, setEntries] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  const addData = () => {
    console.log("New entry:", inputValues);

    if (inputValues.name && inputValues.roll) {
      if (!entries.some(entry => entry.roll === Number(inputValues.roll))) {
        setEntries([...entries, {
          name: inputValues.name,
          roll: parseInt(inputValues.roll),
        }]);

        setInputValues({
          name: "",
          roll: ""
        });
      }
      else {
        setInputValues({
          name: "",
          roll: ""
        });
        alert("Roll number already exists!");
      }
    }
  }

  const removeCard = (i) => {
    console.log("Removing entry at index : ", i);
    setEntries(entries.filter((_, index) => index !== i));
    console.log("Updated entries:", entries);
  }

  return (
    <>
      <div className="container">
        <h1>Test 1</h1>
        <label>Name
          <input
            type="text"
            name="name"
            required
            value={inputValues.name}
            placeholder="Enter your name.."
            onChange={handleChange}
          />
        </label>
        <label>Roll
          <input
            type="number"
            name="roll"
            required
            value={inputValues.roll}
            placeholder="Enter your roll no."
            onChange={handleChange}
          />
        </label>
        <button onClick={addData}>Add</button>
      </div>

      <hr />

      <div className="data">
        <div className="cards">
          {entries.map((entry, index) => (
            <div key={index} className="card">
              <button onClick={() => removeCard(index)}>X</button>
              <p>Name: {entry.name}</p>
              <p>Roll: {entry.roll}</p>
              <p>Index: {index}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;