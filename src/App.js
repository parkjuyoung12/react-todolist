import { useState } from 'react';
import './App.css';

function App() {  

  // [] 배열
  // {} 객체
  const [ todolist, setTodolist ] = useState([
    {
      name: 'Sample',
      task: 'task',
      deadline: '2022-12-25',
      createdAt: new Date().toISOString().substring(0, 10),
      states : {
        willRemove: false,
        canEdit: false,
      }
    }
  ])

  // useState(...)라는 함수는
  //    배열을 반환하는데
  //      그 배열의 0번에는: 우리가 쓰려는 진짜 그 변수
  //      그 배열의 1번에는: 그 변수를 쫓아다니는 스토커 Setter
  //  
  //    그래서 그 1번에 있는 setter 함수를 써서 0번에 있는 그 변수를 바꾸면
  //    : 스토커(setTodolist)가 HTML을 다 들쑤시면서 todolist가 쓰인 모든 곳을 리렌더링
  //
  //    빈 배열은?
  //      useState(여기에 초기화 값) 적는 건데
  //      우리는 첨엔 그냥 빈 배열을 만들 거니까 그냥 빈 배열 넣음.

  return (
  <div className="App">
      <div className="flex flex-col justify-start items-center">
        <div class="w-5/6 border-t-2 border-b-2 border-black">
          <div>
            <p>aaa</p>
            <p>bbb</p>
          </div>
        </div>
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
              // .map(...)은 forEach 같은 역할
              // .map( ()=>{} ) 함수를 넣는 것
              /* 
                .map((obj, index) => {
                  return ( <></> )
                })
              */
              //  obj: 배열에 있던 원소 하나하나(우리는 객체의 배열이니까, 하나하나는 객체.)
              //  index: 인덱스

              todolist.map((obj, index)=>{
                return (
                  <tr>
                    <td>
                      <input type="checkbox" checked={ obj.states.willRemove } onClick={(event) => {
                        let newArray = [ ...todolist ]
                        newArray[index].states.willRemove = !obj.states.willRemove
                        setTodolist( newArray ) // 렌더링
                      }} />
                    </td>
                    <td>{ index + 1 }</td>
                    <td>{ obj.name }</td>
                    <td>{ obj.task }</td>
                    <td>{ obj.deadline }</td>
                    <td>{ obj.createdAt }</td>
                    <td>
                      <button className="border border-black rounded-lg py-1 px-1">수정</button>
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
              // TODO 추가버튼을 눌렀을때 이름, 할일, 기한, 생성일 todolist.push() 전송
              // 렌더링
              let arr = [ ...todolist ] // 사본 생성

              arr.push({
                name: document.querySelector('#name').value,
                task: document.querySelector('#task').value,
                deadline: document.querySelector('#deadline').value,
                createdAt : new Date().toISOString().substring(0, 10),
                states: {
                  willRemove: false,
                  canEdit: false,
                },
              })  // .push({객체})
              
              setTodolist( arr )  // todolist에 넣고, 화면에 뿌려줌(HTML에)
            }}
          >
            추가
          </button>

          <button className="border border-black rounded-lg py-1 px-2 m-2"
            onClick={(event) => {
              // TODO 삭제 버튼을 눌렀을때 이름, 할일, 기한, 생성일 todolist.push() 전송
              // 렌더링
              let arr = []

              // 체크박스 선택 안된 얘들 넣는 것
              todolist.map((ele, index) => {
                // willRemove가 false 인 얘들 의 name, task, deadline, createdAt 만 담기
                if (!ele.states.willRemove) { // willRemove가 false일 때
                  arr.push(ele)
                }
              })
              
              setTodolist(arr)  // todolist에 넣고, 화면에 뿌려줌(HTML에)
            }}
          >
            삭제
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
