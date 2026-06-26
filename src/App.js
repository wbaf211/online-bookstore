import './App.css';
import { HeaderHorizontal } from './layout/HeaderHorizontal';
import { BrowserRouter, Route, Routes } from 'react-router'
import { Checkout, Home } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderHorizontal/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
      <footer>copyright<sup>&copy;</sup> belongs to none21</footer>
    </div>
  );
}

export default App;
