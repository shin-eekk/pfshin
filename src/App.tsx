import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import TeamProject from './pages/TeamProject';
import Career from './pages/Career';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teamproject" element={<TeamProject />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Layout>
    </Router>
    
    
  );
};


export default App
