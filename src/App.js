import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import dataArr from './components/data'; 

const data = dataArr.map((ele, idx) => {
  return (
      <Dashboard key={idx} {...ele} />
  )
})

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/stocks/:symbol' element={<Stock />} />
        <Route path='/stocks' stockInfo={stockInfo} element={<Dashboard />} />
        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
