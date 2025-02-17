import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Nav } from './components/nav'

function App() {

  const [signedIn, setSignedIn] = useState(false)

  return (
    <>
      <Nav />
      <h1>
        {
          signedIn ? "Signed Out" : "Signed In" 
        }
      </h1>
    </>
  )
}

export default App
