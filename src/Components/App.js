import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
//  pages
import Home from './pages/Home';
import Calculator from './pages/calculator';
import Quote from './pages/quote';

function App() {
  return (

    <BrowserRouter>
      <header>
        <nav>
          <h1>Math Magicians</h1>
          <div>
            <Link to="/" className="link">Home</Link>
            <Link to="/calculator" className="link">Calculator</Link>
            <Link to="/quote" className="link">Quotes</Link>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
    </BrowserRouter>
    // <>
    //   <Calculator />
    //   <Quote />
    // </>
  );
}

export default App;
