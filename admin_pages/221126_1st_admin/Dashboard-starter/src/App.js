// css를 import 형식으로 불러옴
import './App.css'
import MainDash from './components/MainDash/MainDash'
import Sidebar from './components/Sidebar/Sidebar';
import Table from './components/Table/Table';

// App이라는 이름의 function으로 html태그를 돌려줌
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <div></div>
      </div>
    </div>
  );
}

export default App;
