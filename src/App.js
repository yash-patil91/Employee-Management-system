import "./App.css";
import List from "./Components/List";
import {Routes,Route} from 'react-router-dom';
import Home from "./Components/Home";


function App() {
  return (
    <div className='container'>
      <div className='text-center my-5'>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </div>
  );
}

export default App;
