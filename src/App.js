import './App.css';
import Page1 from './page1';
import Page2 from './page2';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1/>}/>
      </Routes>

      <Routes>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
