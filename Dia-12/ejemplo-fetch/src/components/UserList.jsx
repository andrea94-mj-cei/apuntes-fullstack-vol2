// Dia-12/ejemplo-fetch/src/components/UserList.jsx
import { useState, useEffect } from 'react';
import { UserCard } from './UserCard';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchUsers = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/users?limit=5&skip=${page * 5}&select=firstName,lastName,age,image,hair`);
            const data = await response.json();
            setUsers(data.users);
            setTotal(data.total);
            setLoading(false);
        } catch (error) {
            console.error('Error en el fetch:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
            <div>
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0}>
                    Anterior
                </button>
                <button onClick={() => setPage((prev) => (prev + 1) * 5 < total ? prev + 1 : prev)} disabled={(page + 1) * 5 >= total}>
                    Siguiente
                </button>
            </div>
            <p>
                Página {page + 1} de {Math.ceil(total / 5)}
            </p>
            <p>Total de usuarios: {total}</p>
        </div>
    );
};