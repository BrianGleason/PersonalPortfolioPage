import {useEffect, useState} from 'react';
import './App.css';
import WebApp from './components/WebApp';


function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  console.log(width)
  const isMobile = width <= 768;

  if (!isMobile){
    return (
      <WebApp height={height}/>
    );
  }
  else {
    return(
      <div style={{color: '#ffffff'}}> Sorry, this page is not currently configured for mobile dimensions. I am currently working on it, and it will be 
        available in a future release.
      </div>
    )
  }
  
}

export default App;
