import useTodos from '../hooks/useTodos';

function TodoFilters() {
    const { filtro, setFiltro, estatisticas } = useTodos();

    const filtros = [
        { valor: 'todas', texto: 'Todas' },
        { valor: 'pendentes', texto: 'Pendentes' },
        { valor: 'concluidas', texto: 'Concluídas' }
    ];

    return (
        <div className="todo-filters">
            {filtros.map((item) => (
                <button
                    key={item.valor}
                    className={filtro === item.valor ? 'ativo' : ''}
                    onClick={() => setFiltro(item.valor)}
                    type="button"
                >
                    {item.texto}
                </button>
            ))}

            <p>
                {estatisticas.pendentes} pendentes de{' '}
                {estatisticas.total} tarefas
            </p>
        </div>
    );
}

export default TodoFilters;