import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, BookOpen, Code, Database, Layout, Sparkles, Terminal, ChevronRight, Briefcase, ClipboardList } from 'lucide-react';
import './index.css';

// Importación de componentes
import IntroWeb from './components/IntroWeb';
import Programacion from './components/Programacion';
import Dinamica from './components/Dinamica';
import Animaciones from './components/Animaciones';
import Interfaz from './components/Interfaz';
import BasesDatos from './components/BasesDatos';
import Proyectos from './components/Proyectos';

// Componente para que el scroll vuelva arriba al cambiar de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efecto para manejar la clase 'dark' en el HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Encabezado Principal */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-slate-900 text-white p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl font-black flex items-center justify-center gap-4 tracking-tighter">
              <Terminal size={42} className="text-blue-200" />
              Desarrollo Web Interfaz
            </h1>
            <p className="mt-3 text-blue-100 text-lg font-light tracking-widest uppercase">
              Compendio Completo de Aprendizaje
            </p>
          </div>
          {/* Decoración de fondo */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
        </header>

        {/* Navegación Sticky */}
        <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-2 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-center items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {[
              { to: "/", icon: <BookOpen size={18} />, label: "Inicio" }, 
              { to: "/IntroWeb", icon: <BookOpen size={18} />, label: "Introducción" },
              { to: "/Programacion", icon: <Code size={18} />, label: "Código" },
              { to: "/Dinamica", icon: <Sparkles size={18} />, label: "JS" },
              { to: "/Animaciones", icon: <Layout size={18} />, label: "Diseño" },
              { to: "/Interfaz", icon: <Database size={18} />, label: "UI/UX" },
              { to: "/BasesDatos", icon: <Database size={18} />, label: "Datos" },
              { to: "/Proyectos", icon: <ClipboardList size={18} />, label: "Proyectos" },
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-semibold text-sm whitespace-nowrap"
              >
                {link.icon} {link.label}
              </Link>
            ))}
            
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>

            {/* Botón de Modo Oscuro */}
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-inner"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" /> 
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>
          </div>
        </nav>

        {/* Contenedor de Contenido Principal */}
        <main className="container mx-auto px-4 md:px-6 max-w-6xl mt-12 mb-20">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl shadow-blue-500/5 p-8 md:p-14 transition-all duration-500 min-h-[60vh]">
            <Routes>
              <Route path="/IntroWeb" element={<IntroWeb />} />
              <Route path="/Programacion" element={<Programacion />} />
              <Route path="/Dinamica" element={<Dinamica />} />
              <Route path="/Animaciones" element={<Animaciones />} />
              <Route path="/Interfaz" element={<Interfaz />} />
              <Route path="/BasesDatos" element={<BasesDatos />} />
              <Route path="/Proyectos" element={<Proyectos />} />
              <Route path="/" element={
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                    <Terminal size={60} className="text-blue-600 animate-pulse" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-white">Bienvenido al Compendio</h2>
                  <p className="max-w-md text-slate-500 dark:text-slate-400 text-lg">
                    Explora las secciones superiores para sumergirte en el ecosistema del desarrollo web moderno.
                  </p>
                  <Link to="/IntroWeb" className="mt-4 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-blue-500/30">
                    Comenzar Recorrido <ChevronRight size={20} />
                  </Link>
                </div>
              } />
            </Routes>
          </div>
        </main>

        {/* Footer Profesional Estilo Header */}
        <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-slate-900 text-white p-12 shadow-2xl text-center relative overflow-hidden">
          {/* Capa de brillo sutil para imitar el efecto del header */}
          <div className="relative z-10" />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Lado Izquierdo: Branding */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <div className="p-2 bg-blue-500/20 border border-blue-500/50 rounded-lg shadow-lg">
                    <Terminal size={20} className="text-blue-400" />
                  </div>
                  <span className="text-xl font-black tracking-tighter text-white">
                    Jhonathan Anota
                  </span>
                </div>
                <p className="text-slate-400 text-sm font-medium">
                  Ingeniero en Sistemas Computacionales
                </p>
              </div>

              {/* Lado Derecho: Créditos y Stack */}
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="flex gap-3">
                  {['React 19', 'Tailwind CSS', 'Vite'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-500 text-xs">
                  © {new Date().getFullYear()} • <span className="text-blue-400 font-bold">JAB Engineer</span> • Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;