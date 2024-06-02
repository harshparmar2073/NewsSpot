import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

const App = () => {
  const [category ,setCategory]=useState ("general");
  return (
    <div>
        <Navbar setCategory={setCategory}/>
        <NewsBoard category={category}/>
    </div>
  )
}

export default App;