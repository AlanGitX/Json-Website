import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './Main';
import View from './View';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path={''}  element={<Main/>} />
      <Route path={'view/:id'} element={<View/>}/>

    </Routes>
  </div>
  );
}

export default App;
