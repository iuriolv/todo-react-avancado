import { memo } from 'react';

function TodoItem({ tarefa, alternarTarefa, removerTarefa }) {
    console.log('Renderizando tarefa:', tarefa.titulo);

    return (
        <li className={`todo-item ${tarefa.concluida ? 'concluida' : ''}`}>
            <label>
                <input
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => alternarTarefa(tarefa.id)}
                />

                <span>{tarefa.titulo}</span>
            </label>
            <button
                className="btn-remover"
                onClick={() => removerTarefa(tarefa.id)}
                aria-label={`Remover ${tarefa.titulo}`}
            >
                Remover
            </button>
        </li>
    );
}

export default memo(TodoItem);