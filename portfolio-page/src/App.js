import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ItemSelector from "./components/ItemSelector";


function App() {
  const title = "Experience";
  const input = {"CME Group": "accompanying CME text", "CloudHealth": "accompanying CH text", "PM Teaching": "accompanying PM text"};
  const title2 = "Projects";
  const input2 = {"Twitter NLP Analyzer": "accompanying TDAS text", "CROWNS Prototype": "accompanying CROWNS text", "Online Learning Algorithms": "online learning algorithms text"};
  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <ItemSelector input={input} title={title}/>
      <ItemSelector input={input2} title={title2}/>
    </div>
  );
}

export default App;
