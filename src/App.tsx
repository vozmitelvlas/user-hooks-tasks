import { useFetch } from './hooks';
import type { Post } from './types';
import './App.css';

function App() {
  const { isLoading, error, data, refetch } = useFetch<Post>('https://jsonplaceholder.typicode.com/posts'); // http://localhost:3001/posts

  return (
    <div className='tasks'>
      <div className='task1'>
        <h2>Задание 1 - useFetch</h2>
        <div>
          <div>
            <button onClick={() => refetch({
              params: {
                _limit: 3
              }
            })}>
              Перезапросить
            </button>
          </div>
          {isLoading && 'Загрузка...'}
          {error && 'Произошла ошибка'}
          {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
        </div>
      </div>

    </div>
  );
}

export default App;
