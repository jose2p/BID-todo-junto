import { useState } from 'react';
import './App.css';
import PersonCard from './componentes/PersonCard';
function App() {
  const [edad, setEdad] = useState(45);
  const [edad_1, setEdad_1] = useState(88);
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={"Doe"} age = { edad } hairColor={"Black"}/>
      <button onClick={ () => setEdad(edad + 1)}>Birthday button for Jane Doe</button>
      <PersonCard firstName={"John"} lastName={"Smith"} age = { edad_1 } hairColor={"Brown"}/>
      <button onClick={ () => setEdad_1(edad_1 + 1)}>Birthday button for Jane Doe</button>
    </div>
  );
}

export default App;