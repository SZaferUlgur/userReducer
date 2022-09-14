import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)
    const [userInput, setUserInput] = useState("")
    const [color, setColor] = useState(false)

  return (
    <main className="App" style={{ color: color ? '#90B77D' : '#FFDE00' }}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br /><br />
      <p>{count}</p>
      <section>
        <button onClick={(() => setCount({count: count - 1}))}>-</button>
        <button onClick={(() => setCount({count: count + 1}))}>+</button>
        <button onClick={(() => setColor(!color))}>Color</button>
      </section>
      <br /><br />
      <p>{userInput}</p>
    </main>
  );
}

export default App;



