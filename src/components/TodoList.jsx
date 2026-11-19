import { memo } from 'react';
import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

function TodoList() {
    const {
        tarefasFiltradas,
        alternarTarefa,
        removerTarefa
    } = useTodos();

    console.log('Renderizando lista de tarefas');

    if (tarefasFiltradas.length === 0) {
        return (
            <p className="lista-vazia">
                Nenhuma tarefa encontrada.
            </p>
        );
    }

    return (
        <ul className="todo-list">
            {tarefasFiltradas.map((tarefa) => (
                <TodoItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    alternarTarefa={alternarTarefa}
                    removerTarefa={removerTarefa}
                />
            ))}
        </ul>
    );
}

export default memo(TodoList);