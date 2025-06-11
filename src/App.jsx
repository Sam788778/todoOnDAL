import { useEffect, useReducer } from 'react';
import './App.css';
import { initState, reduser } from './Store/Store';
import { API } from './Api/Api';
import Input from './components/Input/Input';
import List from './components/List/List';

function App() {
  const [state, dispatch] = useReducer(reduser, initState);

  useEffect(() => {
    API.getTodos(dispatch);
  }, []);

  return (
    <div className="App">
      <Input dispatch={dispatch} />
      <List todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;