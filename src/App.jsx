import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from '../src/components/pages/Home/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
};

export default App
