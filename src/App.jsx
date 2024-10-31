import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import AboutPage from './Pages/AboutPage/AboutPage'
import Favorites from './Components/Favorites/Favorites';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"

function App() {
  return (
    <div id='div-app'>
      <div className='App'>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<CharactersPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;

