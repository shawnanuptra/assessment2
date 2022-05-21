import { Link } from 'react-router-dom';
import MainButton from './components/MainButton';
import Hero from './vectors/hero.svg';

function App() {
  return (
    <div className="flex justify-center flex-col items-center h-screen p-12 text-center">
      <img src={Hero} className="w-screen" />
      <h1 className='text-3xl font-bold mt-12'>Reporting a bridle path damage?</h1>
      <p className='mt-2 mb-12'>Click next to continue</p>
      <Link to={'/q1'}>

        <MainButton text={'NEXT'} />
      </Link>
      <p className='mt-12'>Council member login <span className='text-orange-600 cursor-pointer hover:underline'>here.</span></p>
    </div>
  );
}

export default App;
