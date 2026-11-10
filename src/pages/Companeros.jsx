import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/api';

export default function Companeros() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((data) => {
        // Extrae el array según si viene directo o dentro de una propiedad (data/users)
        const userList = Array.isArray(data) ? data : (data.users || data.data || []);
        setUsers(userList);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error al conectar con la API');
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Mis Compañeros</h2>
        <button
          onClick={() => navigate('/registro')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition shadow"
        >
          Registrarme
        </button>
      </div>

      {loading && <p className="text-slate-500 font-medium">Cargando compañeros...</p>}
      {error && <p className="text-red-500 font-medium">Error: {error}</p>}

      {!loading && !error && users.length === 0 && (
        <p className="text-slate-500">No hay usuarios registrados aún.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((u, index) => (
          <div key={u.id || index} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">{u.name} {u.lastName}</h3>
            <p className="text-sm text-slate-600 mt-2"><strong>RUT:</strong> {u.rut}</p>
            <p className="text-sm text-slate-600"><strong>Email:</strong> {u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}