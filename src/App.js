import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { CharectersList } from './components/CharectersList';
import { Charecter } from './components/Charecter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/> 
        <Routes>
          <Route path='*' element={<h1>404</h1>} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/charecters' element={<CharectersList/>} />
          <Route path='/charecters/:charectrId' element={<Charecter/>} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
