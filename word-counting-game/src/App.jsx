import { useState } from 'react'

function App() {
 

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-green-600 font-display text-5xl">
      <div className="w-10/12 h-4/5 flex flex-col items-center justify-center">
        <h1>Speed Word Game</h1>
        <textarea/>
        <h4>Time remaining:</h4>
        <button>Start Game</button>
        <h1>Word Count: </h1>
      </div>
    </div>

  )
}

export default App
