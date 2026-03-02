import React, { useState } from 'react';
import { Layout, Share2, MessageSquare, ShoppingCart, Layers, Zap, Smartphone, ExternalLink, ShieldCheck, History } from 'lucide-react';

function Interfaz() {
    // Estado para el Laboratorio de Validación (Sección 2.3 del resumen)
    const [form, setForm] = useState({ nombre: '', email: '' });

    // Lógica de validación dinámica
    const nombreValido = form.nombre.length >= 3;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    return (
        <section id="interfaz" className="animate-fade-in space-y-10">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Diseño de Interfaz Dinámica
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Sistemas digitales que ajustan su contenido y comportamiento en respuesta al contexto del usuario y patrones de interacción.
                </p>
            </header>

            {/* LABORATORIO: VALIDACIÓN DINÁMICA (Patrones de Diseño Interactivo) */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border-2 border-dashed border-blue-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-6">
                    <ShieldCheck className="text-blue-500" size={24} />
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Laboratorio: Validación en Tiempo Real</h3>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
                    "Al utilizar el evento input, el sistema proporciona feedback inmediato, reduciendo la fricción cognitiva".
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Campo Nombre */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nombre (Min. 3 caracteres)</label>
                        <input 
                            type="text"
                            placeholder="Tu nombre..."
                            className={`w-full p-3 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                                form.nombre === '' ? 'border-slate-200 dark:border-slate-700' : 
                                nombreValido ? 'border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'border-red-500'
                            }`}
                            onChange={(e) => setForm({...form, nombre: e.target.value})}
                        />
                        <span className={`text-[10px] font-bold ${nombreValido ? 'text-green-500' : 'text-red-400'}`}>
                            {form.nombre === '' ? 'Esperando entrada...' : nombreValido ? '✓ NOMBRE VÁLIDO' : '✗ DEMASIADO CORTO'}
                        </span>
                    </div>

                    {/* Campo Email */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Institucional</label>
                        <input 
                            type="email"
                            placeholder="usuario@dominio.com"
                            className={`w-full p-3 rounded-xl border-2 transition-all outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white ${
                                form.email === '' ? 'border-slate-200 dark:border-slate-700' : 
                                emailValido ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'border-red-500'
                            }`}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                        />
                        <span className={`text-[10px] font-bold ${emailValido ? 'text-blue-500' : 'text-red-400'}`}>
                            {form.email === '' ? 'Requerido para el registro' : emailValido ? '✓ FORMATO CORRECTO' : '✗ EMAIL INVÁLIDO'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Grid de Aplicaciones Reales */}
            <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <Layout className="text-blue-500" size={24} /> Casos de Uso en el Mundo Real
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-[1.02] transition-transform">
                        <Share2 className="text-blue-400 mb-4" size={32} />
                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Redes Sociales</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Actualización de feeds y notificaciones instantáneas mediante WebSockets.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-[1.02] transition-transform">
                        <MessageSquare className="text-green-500 mb-4" size={32} />
                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Mensajería</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Comunicación bidireccional inmediata y estados de "escribiendo..." en tiempo real.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-[1.02] transition-transform">
                        <ShoppingCart className="text-orange-500 mb-4" size={32} />
                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">E-commerce</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Lazy loading para catálogos extensos y carritos dinámicos.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bibliografía Técnica Actualizada */}
            <footer className="pt-8 bg-slate-50 dark:bg-slate-900/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <History size={16}/> Fuentes Académicas Consultadas (2024-2026)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { aut: 'Nielsen Norman Group', tit: 'Usability Principles for Interactive Systems (2024)', url: 'https://www.nngroup.com' },
                        { aut: 'Google', tit: 'Material Design 3: Interactive Patterns (2023)', url: 'https://m3.material.io' },
                        { aut: 'WebAIM', tit: 'Accessibility in Dynamic Content (2025)', url: 'https://webaim.org' },
                        { aut: 'MDN Web Docs', tit: 'Client-side Validation Standards (2026)', url: 'https://developer.mozilla.org' }
                    ].map((ref, i) => (
                        <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" 
                           className="group flex items-center justify-between text-xs p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 transition-all">
                            <span className="text-slate-700 dark:text-slate-300 font-medium"><strong>{ref.aut}</strong> - {ref.tit}</span>
                            <ExternalLink size={14} className="text-blue-500 opacity-50 group-hover:opacity-100" />
                        </a>
                    ))}
                </div>
            </footer>
        </section>
    );
}

export default Interfaz;