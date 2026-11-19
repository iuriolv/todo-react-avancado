import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    return (
        <TodoProvider>
            <main className="container">

                <header className="header">
                    <span className="logo">
                        TASK<span>FLOW</span>
                    </span>
                </header>
                <section className="todo-container">
                    <div className="section-header">
                        <h1>Minhas tarefas</h1>
                    </div>
                    <TodoForm />
                    <TodoFilters />
                    <TodoList />
                </section>
            </main>
        </TodoProvider>
    );
}

export default App;