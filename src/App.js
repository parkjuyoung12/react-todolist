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
                      <button className="border border-black rounded-lg py-1 px-2">
                        수정
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div>
          <input id="name" type="text" placeholder="이름" className="border border-black m-2" />
          <input id="task" type="text" placeholder="할일" className="border border-black m-2" />
          <input id="deadline" type="text" placeholder="기한 ex) yyyy-mm-dd" className="border border-black m-2" />
          <button className="border border-black rounded-lg py-1 px-2"
              onClick={(event) => {
                // 1: 사본(배열) 생성
                let newArray = [ ...todolist ]  // 배열 복사(spread: 잼 바르듯이 펴 바르는 거.)

                // 2: 배열에 객체 넣기
                newArray.push({
                  name: document.querySelector('#name').value,
                  task: document.querySelector('#task').value,
                  deadline: document.querySelector('#deadline').value,
                  createdAt: new Date().toISOString().substring(0, 10),
                })

                // 3: 리렌더링(까지 해 주는 대입)
                setTodolist(newArray)
              }}
          >
            추가
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
