import { useState } from 'react';
import useTodos from '../hooks/useTodos';

function TodoForm() {
    const [titulo, setTitulo] = useState('');

    const { adicionarTarefa } = useTodos();

    function handleSubmit(event) {
        event.preventDefault();

        if (!titulo.trim()) {
            return;
        }

        adicionarTarefa(titulo.trim());

        setTitulo('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
                aria-label="Descrição da tarefa"
            />

            <button type="submit">
                Adicionar
            </button>
        </form>
    );
}

export default TodoForm;