interface HeaderProps {
  onCreateNewTodo: () => void
}

// tornar o componente puro
export function Header({ onCreateNewTodo }: HeaderProps) {
  return (
    <header>
      <h1>My app todo list</h1>

      <button onClick={onCreateNewTodo}>add new todo</button>
    </header>
  )
}
