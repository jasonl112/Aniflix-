import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import ShowAnime from "./pages/anime/ShowAnime";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<ShowAnime/>}/>
    </Routes>
  );
}

export default App;
