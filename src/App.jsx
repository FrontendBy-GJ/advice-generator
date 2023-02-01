import { useState } from 'react';
import { Dice, DividerMobile, DividerDesktop } from './assets';

function App() {
  const [value, setValue] = useState({ advice: '', id: 0 });

  function handleFetch() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setValue({ advice: data.slip.advice, id: data.slip.id });
      })
      .catch((error) => console.log('An error occurred', error));
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border border-black">
        <h1>advice #{value.id}</h1>
        <p className="text-[28px]">"{value.advice}"</p>
        <div>
          <img src={DividerMobile} alt="Divider" className="md:hidden" />
          <img
            src={DividerDesktop}
            alt="Divider"
            className="hidden md:inline"
          />
        </div>
        <button onClick={handleFetch}>
          <img src={Dice} alt="Dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
