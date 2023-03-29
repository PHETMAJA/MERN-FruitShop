import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePages from './Pages/Home/Home';
import ListPages from './Pages/List/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/search" element={<ListPages />} />
        <Route path="/list" element={<ListPages />} />
        <Route path="/profile" element={<ListPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
