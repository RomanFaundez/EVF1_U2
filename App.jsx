import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Companeros from './pages/Companeros';
import Registro from './pages/Registro';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Menú de Navegación */}
        <nav className="bg-slate-800 text-white shadow-md">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="font-bold text-xl">CFT Informática</h1>
            <div className="space-x-6">
              <Link to="/" className="hover:text-indigo-300 transition">Inicio</Link>
              <Link to="/mis-companeros" className="hover:text-indigo-300 transition">Mis Compañeros</Link>
            </div>
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/mis-companeros" element={<Companeros />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/registrarme" element={<Registro />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}