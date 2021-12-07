import React from "react";
// import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle";
import {Home} from "./components/Page/Home";



function App() {
  return (
    <>
       <Home/>
      <GlobalStyle/>
    </>
  );
}

export default App;
