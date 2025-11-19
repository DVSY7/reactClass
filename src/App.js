import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";


const Home = ()=>{
  return(
    <div>Home</div>
  )
}

const Main = ()=> {
  return( 
    <div>Main</div>
  )
}

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
