import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, } from "react-router-dom";
import Detail from './components/Detail';
import Contact from './components/Contact';


function App () {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}
export default App;
