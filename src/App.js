import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import MyGithub from './components/github/MyGithub';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <MyGithub/>
    </div>
  );
}

export default App;
