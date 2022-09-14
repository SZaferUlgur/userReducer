import { useReducer } from 'react';

const initialState = {
  count: 0, 
  userInput: '', 
  color: false
}

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.TG_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
}

function App() {
  const [state, redispatch] = useReducer(reducer, initialState)

  return (
    <main className="App" style={{ color: state.color ? '#90B77D' : '#FFDE00' }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => redispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
      />
      <br /><br />
      <p>{state.count}</p>
      <section>
        <button onClick={(() => redispatch({ type: ACTION.DECREMENT }))}>-</button>
        <button onClick={(() => redispatch({ type: ACTION.INCREMENT }))}>+</button>
        <button onClick={(() => redispatch({ type: ACTION.TG_COLOR }))}>Color</button>
      </section>
      <br /><br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;



