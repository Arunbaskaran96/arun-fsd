
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Portal from './Components/Portal';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Interest from './Pages/Interest';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/navbar' element={<Portal/>}>
        <Route path='about' element={<About/>}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='experience' element={<Experience/>}></Route>
        <Route path='interest' element={<Interest/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
