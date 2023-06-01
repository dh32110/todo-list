import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]); //todo를 담는 배열
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ''){
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo('');
  }
  return (
    <div>
      <h1>To Do List</h1>
      <h3>자신의 할 일을 메모하고 완료해보세요.</h3>
      <form>
        <input onChange={onChange} value={toDo} type='text' placeholder='당신의 할 일은 무엇인가요?'/>
        <button>추가!</button>
      </form>
      <hr />
      <ul>

      </ul>
    </div>
  );
}

export default App;
