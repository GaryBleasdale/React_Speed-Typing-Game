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


  const handleClick = () => {
    setTimerRunning(true)
    setWords("")
    textAreaRef.current.value=""
    let repeater = setInterval(() => {
      setRemaining(prevCount => prevCount - 1);
      
    }, 1000);
    setTimeout(function( ) { clearInterval( repeater );setTimerRunning(false);setRemaining(5);
    }, 5000);

  }



  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-green-600 font-display text-5xl">
      <div className="w-10/12 h-4/5 flex flex-col items-center justify-center">
        <h1>Speed Word Game</h1>
        <textarea onChange={wordsSetter} autoFocus disabled={!timerRunning} ref={textAreaRef}/>
        <h4>Time remaining:{remaining}</h4>
        <button onClick={handleClick} className='bg-green-600 text-white p-5 rounded-md '>Start Game</button>
        <h1>Word Count: {wordCount}</h1>
      </div>
    </div>

  )
}

export default App
