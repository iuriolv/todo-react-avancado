import { createContext, useCallback, useMemo, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage('tarefas', []);
    const [filtro, setFiltro] = useState('todas');
    const adicionarTarefa = useCallback((titulo) => {
        const novaTarefa = {
            id: crypto.randomUUID(),
            titulo,
            concluida: false
        };

        setTodos((tarefasAtuais) => [
            ...tarefasAtuais,
            novaTarefa
        ]);
    }, [setTodos]);

    const alternarTarefa = useCallback((id) => {
        setTodos((tarefasAtuais) =>
            tarefasAtuais.map((tarefa) =>
                tarefa.id === id
                    ? { ...tarefa, concluida: !tarefa.concluida }
                    : tarefa
            )
        );
    }, [setTodos]);

    const removerTarefa = useCallback((id) => {
        setTodos((tarefasAtuais) =>
            tarefasAtuais.filter((tarefa) => tarefa.id !== id)
        );
    }, [setTodos]);

    const tarefasFiltradas = useMemo(() => {
        switch (filtro) {
            case 'concluidas':
                return todos.filter((tarefa) => tarefa.concluida);

            case 'pendentes':
                return todos.filter((tarefa) => !tarefa.concluida);

            default:
                return todos;
        }
    }, [todos, filtro]);

    const estatisticas = useMemo(() => ({
        total: todos.length,
        concluidas: todos.filter((tarefa) => tarefa.concluida).length,
        pendentes: todos.filter((tarefa) => !tarefa.concluida).length
    }), [todos]);

    const valorContexto = useMemo(() => ({
        todos,
        filtro,
        setFiltro,
        tarefasFiltradas,
        estatisticas,
        adicionarTarefa,
        alternarTarefa,
        removerTarefa
    }), [
        todos,
        filtro,
        tarefasFiltradas,
        estatisticas,
        adicionarTarefa,
        alternarTarefa,
        removerTarefa
    ]);

    return (
        <TodoContext.Provider value={valorContexto}>
            {children}
        </TodoContext.Provider>
    );
}