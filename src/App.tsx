import { useLocalStorage } from './hooks';
import './App.css';

function App() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div className='tasks'>
      <div className='task2'>
        <h2>Задание 2 - useLocalStorage</h2>
        <div>
          <p>Значение из LocalStorage: {value}</p>
          <div>
            <button onClick={() => setItem('new storage value')}>Задать значение</button>
            <button onClick={() => removeItem()}>Удалить значение</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
