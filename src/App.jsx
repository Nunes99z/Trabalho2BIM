import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [texto, setTexto] = useState("")
  const handleClick = () => {
    setCount(count * 2)
    console.log(count)
  }
  const handleTexto = (e) => {
    console.log(e.target.value)
      setTexto(e.target)
  }

  return (
    <>
      <div className="card">
        <input type="text" placeholder='digite here' onChange={handleTexto} />
        <button onClick={handleClick}>Clique Aqui</button>
        {texto}
      </div>
    </>
  )

}

export default App