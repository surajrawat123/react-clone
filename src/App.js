import logo from './logo.svg';
import Header from './components/header/Header';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.scss';
import ReactPage from './components/menu/ReactPage';
import Docs from "./components/menu/Docs";
import Tutorial from "./components/menu/Tutorial"
import Blog from "./components/menu/Blog"
import Version from "./components/menu/Version"
import Language from "./components/menu/Language"
import Community from "./components/menu/Community"

function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route exact path="/" element={<ReactPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/tutorial" element={<Tutorial/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/version" element={<Version />} />
          <Route path="/language" element={<Language />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
