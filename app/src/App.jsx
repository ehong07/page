import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="hero">Hello world!</h1>
      <p>My name is Easak and I'm a full-stack engineer based in San Francisco</p>
      <hr />
    </div>
  )
}

export default App
