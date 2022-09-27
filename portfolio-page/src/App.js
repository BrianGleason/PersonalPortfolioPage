import './App.css';
import AppBody from './components/AppBody';
import ResumeLink from './components/ResumeLink';
import { Routes, Route } from "react-router-dom";

function App() {

  return(
    <Routes>
      <Route path="/" element={<AppBody />}/>
      <Route path="/resume.pdf" element={<ResumeLink/>} />
      <Route path="/.*" element={<div> Looks like this page doesn't exist. </div>}/>
    </Routes>
  )
}

export default App;
