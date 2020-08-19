import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    fetch('http://test.banana/greeting').then(resp => resp.json()).then(result => { 
      console.info('result', result)
      setState(result.greeting);
     }).catch(err => console.error('err', err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          A greeting should load below
        </p>
        { state ? <div data-testid="greeting">{state}</div>: null}
      </header>
    </div>
  );
}

export default App;
