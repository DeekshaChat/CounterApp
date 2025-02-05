import { useState } from 'react';
import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import CustomCounter from './components/Counter/Customcounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSet(val){
    setChosenCount(val);
  }

  return (
    <>
      <Header />
      <main>
        <CustomCounter onSet={handleSet} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
