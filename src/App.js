import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-start items-center">
        <p>Tailwind Test</p>
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
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>test번호</td>
              <td>홍길동</td>
              <td>잠자기</td>
              <td>오늘</td>
              <td>오늘</td>
              <td>
                <button>수정</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
