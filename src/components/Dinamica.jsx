import React, { useState } from 'react';
import { Sparkles, Cpu, ExternalLink, Plus, RotateCcw } from 'lucide-react';

function Dinamica() {
    // 2. Se define el estado para el contador interactivo
    const [cuenta, setCuenta] = useState(0);
    
    return (
        <section id="dinamica" className="animate-fade-in space-y-8">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Programación Web Dinámica
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Permite crear aplicaciones interactivas cuyo contenido cambia automáticamente en respuesta a las acciones del usuario, logrando una experiencia fluida sin recargar el navegador.
                </p>
            </header>

            {/* Contenedor de JavaScript */}
            <div className="bg-white/50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    <Cpu className="text-yellow-500" /> JavaScript y Frameworks
                </h3>
                <p className="mb-6 text-slate-600 dark:text-slate-400">
                    JavaScript es el motor de la interactividad. Gracias a frameworks como <strong>React, Angular o Vue.js</strong>, podemos manipular el DOM (Document Object Model) de forma eficiente.
                </p>

                {/* Bloque de Código JS estilo Terminal */}
                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg mb-8">
                    <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">script.js</span>
                    </div>
                    <pre className="p-4 bg-slate-950 text-yellow-200 font-mono text-sm overflow-x-auto">
                        <code>{`// Ejemplo de estado reactivo en React
const [cuenta, setCuenta] = useState(0);

// Función para actualizar la interfaz dinámicamente
const incrementar = () => setCuenta(cuenta + 1);`}</code>
                    </pre>
                </div>

                {/* 3. COMPONENTE INTERACTIVO (useState en acción) */}
                <div className="bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8 text-center">
                    <h4 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-4">
                        Laboratorio experimental: React State
                    </h4>
                    
                    <div className="text-6xl font-black text-slate-800 dark:text-white mb-6 select-none">
                        {cuenta}
                    </div>

                    <div className="flex justify-center gap-3">
                        <button 
                            onClick={() => setCuenta(cuenta + 1)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                        >
                            <Plus size={20} /> Incrementar
                        </button>
                        
                        <button 
                            onClick={() => setCuenta(0)}
                            className="flex items-center gap-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600 px-5 py-2.5 rounded-xl font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-600"
                        >
                            <RotateCcw size={18} /> Reset
                        </button>
                    </div>
                    <p className="text-slate-500 text-[11px] mt-6 italic">
                        Esta interacción demuestra cómo el Virtual DOM sincroniza el estado con la Interfaz de Usuario automáticamente.
                    </p>
                </div>
                
                {/* Tarjetas de Referencia */}
                {/* Tarjetas de Referencia */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Documentación Oficial</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Tarjeta ECMAScript - Resalte Amarillo */}
                        <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-start justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all group border-l-4 border-l-yellow-400 hover:border-yellow-400 hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 hover:shadow-lg">
                            <div>
                                <span className="block font-bold text-slate-800 dark:text-slate-100 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors">ECMAScript 2023</span>
                                <span className="text-xs text-slate-500 italic">Estándar oficial ECMA-262</span>
                            </div>
                            <ExternalLink size={18} className="text-slate-400 group-hover:text-yellow-500 group-hover:scale-110 transition-all" />
                        </a>

                        {/* Tarjeta W3C - Resalte Azul */}
                        <a href="https://www.w3.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-start justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all group border-l-4 border-l-blue-400 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:shadow-lg">
                            <div>
                                <span className="block font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">W3C</span>
                                <span className="text-xs text-slate-500 italic">World Wide Web Consortium (2026)</span>
                            </div>
                            <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all" />
                        </a>

                    </div>
                </div>
            </div>

            {/* Tip decorativo */}
            <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/50 rounded-xl text-amber-800 dark:text-amber-200 text-sm">
                <Sparkles size={20} className="text-amber-500 shrink-0" />
                <p><strong>Dato curioso:</strong> JavaScript fue creado originalmente en solo 10 días por Brendan Eich en 1995.</p>
            </div>
        </section>
    );
}

export default Dinamica;