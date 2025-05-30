import { useState } from "react";
import './App.css'

function App() {
  const [nome, setNome] = useState("")
  const [dia, setDia] = useState('')
  const [desc, setDesc] = useState('')
  const [materia, setMateria] = useState('')
  const [filtro, setFiltro] = useState('')

  const adicionarTarefas = () => {
    if (nome && desc && dia )
  }

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
        <input type="text" placeholder='digite a tarefa' onChange={handleTexto} />
        <button onClick={handleClick}>Clique Aqui</button>
        {texto}
      </div>
    </>
  )

}

export default App