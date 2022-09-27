import {useEffect, useState} from 'react';
import '../App.css';
import WebApp from './WebApp';
import MobileApp from './MobileApp';


function AppBody() {

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
  const isMobile = width <= 768 || height > width;

  if (!isMobile){
    return (
      <WebApp height={height}/>
    );
  }
  else {
    return(
      <MobileApp/>
    )
  }
  
}

export default AppBody;