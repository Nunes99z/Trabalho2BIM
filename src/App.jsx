import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const handleClick = () => {
    setCount(count * 2)
    console.log(count)
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>Clique Aqui</button>
        {count}
      </div>
    </>
  )

}

export default App