import { useState } from 'react';
import './App.css';

function App() {  

  // [] 배열
  // {} 객체
  const [ todolist, setTodolist ] = useState([
    {
      name: '홍길동',
      task: '잠자기',
      deadline: '2021-12-18',
      createdAt: '2021-12-18',
    },
    {
      name: '박주영',
      task: '공부',
      deadline: '2021-12-18',
      createdAt: '2021-12-18',
    },
    {
      name: '강민성',
      task: '강의',
      deadline: '2021-12-18',
      createdAt: '2021-12-18',
    }
  ])

  return (
  <div className="App">
      <div className="flex flex-col justify-start items-center">
        <p>Tailwind Test</p>

      </div>
      <div className="flex flex-col items-center ">
        <table className="w-5/6 border-t-2 border-b-2 border-black " >
          <thead className="border-b-2 border-black">
            <tr>
              <th>선택</th>
              <th>번호</th>
              <th>name</th>
              <th>task</th>
              <th>deadline</th>
              <th>createdAt</th>
              <th>수정</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {
              todolist.map((obj, index) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.task}</td>
                    <td>{obj.deadline}</td>
                    <td>{obj.createdAt}</td>
                    <td>
                      <button className="border border-black rounded-lg">
                        수정
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
