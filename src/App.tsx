import { useViewportSize } from './hooks';
import './App.css';

function App() {
  const { height, width } = useViewportSize();

  return (
    <div className='tasks'>
      <div className='task3'>
        Width: {width}, height: {height}
      </div>
    </div>
  );
}

export default App;
