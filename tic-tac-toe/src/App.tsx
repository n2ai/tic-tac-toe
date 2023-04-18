import { useState } from 'react'
import './App.css'

function CheckBox(){
  
}

function App() {
  let map : {isMark: Boolean} [][] = [[{isMark:false}, {isMark:false}, {isMark:false}],
                                      [{isMark:false}, {isMark:false}, {isMark:false}],
                                      [{isMark:false}, {isMark:false}, {isMark:false}]]
  
  
  const [state,setState] = useState(map)
  
  function changeMap(){
    setState(state)
  }


  return (
    <>
      
    </>
  )
}

export default App
