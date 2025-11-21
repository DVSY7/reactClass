import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './home';
import { Loing } from './login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Loing />} />
          <Route path={'/home'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
