import AddTodo from "./components/AddTodo";
import Todo from './components/Todo'


function App() {

  return (
    <>
      <div className=" w-3/4 mx-auto">
        <div className="mx-auto flex justify-center">
          <AddTodo />
        </div>
        <Todo />
      </div>
    </>
  )
}

export default App
