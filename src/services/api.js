const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) throw new Error('Error al obtener los usuarios');
  return await response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (!response.ok) {
    // Retorna el mensaje del servidor (ej. si el RUT o Email ya existen)
    throw new Error(data.message || data.error || 'Error al registrar el usuario');
  }
  return data;
};