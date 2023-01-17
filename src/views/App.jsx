import { useState } from 'react';
import Users from './components/Users';
import mariposa from './assets/mariposa.jpeg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 bg-neutral-200">
      <p>Edit src/App.jsx and save to test</p>
      <div className="bg-neutral-50 p-5 rounded-md text-center flex flex-col gap-3">
        <img src={mariposa} className="mx-auto rounded" alt="mariposa logo" />
        <h1 className="text-3xl font-bold">Mariposa Tech Hub</h1>
        <button
          className="bg-slate-500 hover:bg-slate-700 text-slate-100 p-2 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <Users />
    </div>
  );
}
