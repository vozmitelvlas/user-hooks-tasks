import { useHover } from './hooks';
import './App.css';

function App() {
  const { hovered, ref } = useHover<HTMLDivElement>();

  return (
    <div className='tasks'>
      <div ref={ref} className='task3'>
        {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
      </div>
    </div>
  );
}

export default App;
