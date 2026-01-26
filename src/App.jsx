import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sun, Moon, BookOpen, Code, Database, Layout, Sparkles, Terminal } from 'lucide-react';
import './index.css';

// Importación de tus componentes
import IntroWeb from './components/IntroWeb';
import Programacion from './components/Programacion';
import Dinamica from './components/Dinamica';
import Animaciones from './components/Animaciones';
import Interfaz from './components/Interfaz';
import BasesDatos from './components/BasesDatos';
import Proyectos from './components/Proyectos';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-900'}`}>
        
        {/* Encabezado Principal */}
        <header className="bg-blue-600 dark:bg-blue-800 text-white p-8 shadow-xl text-center">
          <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3">
            <Terminal size={36} />
            Desarrollo Web Interfaz
          </h1>
          <p className="mt-2 text-blue-100 italic">Compendio Completo de Aprendizaje</p>
        </header>

        {/* Navegación */}
        <nav className="sticky top-0 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-4 overflow-x-auto">
          <div className="flex justify-center items-center gap-4 min-w-max px-4">
            <Link to="/IntroWeb" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <BookOpen size={18} /> IntroWeb
            </Link>
            <Link to="/Programacion" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <Code size={18} /> Programacion
            </Link>
            <Link to="/Dinamica" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <Sparkles size={18} /> Dinamica
            </Link>
            <Link to="/Animaciones" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <Layout size={18} /> Animaciones
            </Link>
            <Link to="/Interfaz" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <Database size={18} /> Interfaz
            </Link>
            <Link to="/BasesDatos" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <Database size={18} /> BasesDatos
            </Link>
            <Link to="/Proyectos" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-all font-medium">
              <Database size={18} /> Proyectos
            </Link>
            
            {/* Botón de Modo Oscuro */}
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2.5 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 shadow-md transition-all flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
              <Sun size={20} className="text-yellow-400 fill-yellow-400" /> 
              ) : (
                <Moon size={20} className="text-blue-600 fill-blue-600" />
              )}
            </button>
          </div>
        </nav>

        {/* Contenido Dinámico */}
        <main className="container mx-auto p-6 max-w-5xl">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 dark:bg-slate-800/90 dark:border-slate-700 rounded-3xl shadow-2xl p-10 text-slate-800 dark:text-slate-100 transition-all duration-500">
            <Routes>
              <Route path="/IntroWeb" element={<IntroWeb />} />
              <Route path="/Programacion" element={<Programacion />} />
              <Route path="/Dinamica" element={<Dinamica />} />
              <Route path="/Animaciones" element={<Animaciones />} />
              <Route path="/Interfaz" element={<Interfaz />} />
              <Route path="/BasesDatos" element={<BasesDatos />} />
              <Route path="/Proyectos" element={<Proyectos />} />
              <Route path="/" element={
                <div className="text-center py-20">
                  <h2 className="text-3xl font-bold text-slate-400">Selecciona una sección para comenzar el recorrido</h2>
                  <p className="mt-4 text-slate-500">Aprende los fundamentos del desarrollo web moderno paso a paso.</p>
                </div>
              } />
            </Routes>
          </div>
        </main>

        <footer className="text-center p-8 text-slate-500 text-sm">
          © 2026 | JAB Engineer | Hecho con React + Vite + Tailwind v4
        </footer>
      </div>
    </Router>
  );
}

export default App;