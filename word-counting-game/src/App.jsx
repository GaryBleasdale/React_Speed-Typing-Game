import { useState, useEffect, useRef } from 'react'

function App() {
  // State Management
  const [words, setWords] = useState("")
  const [wordCount,setWordCount] = useState(0)
  const [remaining, setRemaining] = useState(5)
  const [timerRunning, setTimerRunning] = useState(false)
 // Ref creation (for dom manipulation)
  const textAreaRef = useRef(null);

  
  let wordCounter =(str)=>{
     let wordSplit = str.split(' ')
     setWordCount(wordSplit.length)
     console.log(wordCount)
  }

  let wordsSetter =(e)=>{
    setWords(e.target.value)   
  }

  useEffect(()=>{
    setWords(words)
    let wordSplit = words.trim().split(/[\w\d\’\'-]+/)
    console.log(wordSplit)
    setWordCount(wordSplit.length ===0 ? 0 : wordSplit.length-1)
  },[words])

  let buttonStyle={

  }

  const handleClick = () => {
    setTimerRunning(true)
    setWords("")
    buttonStyle={
      backgroundColor:"grey",
      color:"darkgrey"
    }
    textAreaRef.current.value=""
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
    let repeater = setInterval(() => {
      setRemaining(prevCount => prevCount - 1);
      
    }, 1000);
    setTimeout(function( ) { clearInterval( repeater );setTimerRunning(false);setRemaining(5);buttonStyle={
      backgroundColor:"grey",
      color:"darkgrey"
    };
    }, 5000);

  }



  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-green-600 font-display text-5xl text-center	">
      <div className="w-10/12 h-4/5 flex flex-col items-center justify-center">
      <h1 className='py-10 font-display text-6xl'>Speed Word Game</h1>
<textarea className='p-5 h-48 font-display text-xl resize-none' onChange={wordsSetter} autoFocus disabled={!timerRunning} ref={textAreaRef}/>
<h4 className='py-5 font-display text-3xl'>Time remaining:{remaining}</h4>
<button
  onClick={handleClick}
  disabled={timerRunning}
  className={timerRunning ? 'bg-gray-600 text-gray-900 p-5 rounded-md' :
  'bg-gradient-to-r from-green-500 to-blue-500 text-white p-5 rounded-md hover:shadow-xl duration-200'}
>
  Start Game
</button>
        <h1 className="text-4xl py-5">Word Count: {wordCount}</h1>
      </div>
    </div>

  )
}

export default App
