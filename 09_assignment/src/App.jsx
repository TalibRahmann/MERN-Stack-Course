import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Card} from './Card';

function App() {
  return(
    <div>
      <Card title="Card 1" description="Hey I am the first card" />
      <Card title="Card 2" description="Hey I am the second card" />
      <Card title="Card 3" description="Hey I am the third card" />
      <h1>React Project</h1>
      <p>Hello guys this is my first react project</p>
    </div>
  )
}

export default App
