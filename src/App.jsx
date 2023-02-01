import { useState } from 'react';
import { Dice, DividerMobile, DividerDesktop } from './assets';

function App() {
  const [value, setValue] = useState({ advice: '', id: 0 });
  const [isLoading, setIsLoading] = useState(false);

  function handleFetch() {
    setIsLoading(true);
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setValue({ advice: data.slip.advice, id: data.slip.id });
      })
      .catch((error) => console.log('An error occurred', error))
      .finally(() => setIsLoading(false));
  }

  const loading = (
    <p className="my-6 text-[28px] text-light-cyan">Loading...</p>
  );

  const message = (
    <p className="mt-10 mb-6 animate-pulse uppercase tracking-widest text-light-cyan">
      click dice!
    </p>
  );

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-dark-blue">
      <div className="relative mx-4 max-w-lg rounded-xl bg-dark-grayish-blue px-6 text-center">
        {!value.advice && message}
        {value.advice && (
          <>
            <h1 className="mt-10 uppercase tracking-widest text-neon-green">
              advice #{value.id}
            </h1>
            {isLoading ? (
              loading
            ) : (
              <p className="py-6 text-[28px] text-light-cyan">
                &ldquo;{value.advice}&rdquo;
              </p>
            )}
          </>
        )}
        <div className="mb-16 inline-block">
          <img src={DividerMobile} alt="Divider" className="sm:hidden" />
          <img
            src={DividerDesktop}
            alt="Divider"
            className="hidden sm:inline"
          />
        </div>
        <div className="group relative">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-neon-green p-8 transition duration-1000 group-hover:blur-lg group-hover:duration-200"></div>
          <button
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-neon-green p-5"
            onClick={handleFetch}
            disabled={isLoading === true}
          >
            <img
              src={Dice}
              alt="Dice"
              className="transition duration-1000 group-hover:rotate-180"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
