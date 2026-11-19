import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function useTodos() {
    const contexto = useContext(TodoContext);

    if (!contexto) {
        throw new Error(
            'useTodos deve ser utilizado dentro de TodoProvider'
        );
    }

    return contexto;
}

export default useTodos;