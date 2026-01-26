import React from 'react';
import { Sparkles, Cpu, ExternalLink, Code2 } from 'lucide-react';

function Dinamica() {
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
                        <code>{`// Cambia el contenido de un elemento dinámicamente
const elemento = document.getElementById("demo");
elemento.innerHTML = "¡Hola, mundo interactivo!";

// Ejemplo de una función de flecha (ES6+)
const saludar = (nombre) => \`Bienvenido, \${nombre}\`;`}</code>
                    </pre>
                </div>

                {/* Tarjetas de Referencia */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Documentación Oficial</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-start justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all group border-l-4 border-l-yellow-400">
                            <div>
                                <span className="block font-bold text-slate-800 dark:text-slate-100">ECMAScript 2023</span>
                                <span className="text-xs text-slate-500 italic">Estándar oficial ECMA-262</span>
                            </div>
                            <ExternalLink size={18} className="text-slate-400 group-hover:text-yellow-500" />
                        </a>

                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-start justify-between p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-md transition-all group border-l-4 border-l-blue-400">
                            <div>
                                <span className="block font-bold text-slate-800 dark:text-slate-100">MDN Web Docs JS</span>
                                <span className="text-xs text-slate-500 italic">Guías y referencias de Mozilla</span>
                            </div>
                            <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-500" />
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