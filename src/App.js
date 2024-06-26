import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMark from './components/AddMark';
import ViewMember from './components/ViewMember';
import Aboutus from './components/Aboutus';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/add' element={<AddMark/>}/>
      <Route  path='/view' element={<ViewMember/>}/>
      <Route  path='/aboutus' element={<Aboutus/>}/>
     </Routes>
     </BrowserRouter>
    
  );
}

export default App;
