import { useEffect, useState } from 'react'
import { Header } from './components/Header'

import * as Input from './components/Input'

// handle ->  sempre no mesmo componente executando uma ação
// on ->  quando o componente filho recebe uma ação de algum componente pai

function App() {
  const [todos, setTodo] = useState<string[]>([])

  function handleCreateNewTodo() {}

  useEffect(() => {
    // get todo list backend
  }, [])

  return (
    <div>
      <Header onCreateNewTodo={handleCreateNewTodo} />

      <Input.Root>
        <Input.Label htmlFor="label" />
        <Input.FormField />
        <Input.ErrorMessage message="Digite seu nome corretamente." />
      </Input.Root>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <p>This to-do list app is insanely fast</p>
          </div>

          <div>
            <h3>No css</h3>
            <p>clean and flat design with no CSS.</p>
          </div>
        </section>

        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo} </li>
          ))}
        </ul>
      </main>

      {/* footer */}
    </div>
  )
}

export default App
