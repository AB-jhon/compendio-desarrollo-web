import React from 'react';
import { FileCode, Palette, ExternalLink, Terminal } from 'lucide-react';

function Programacion() {
    return (
        <section id="programacion" className="animate-fade-in space-y-8">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Estándares de Programación
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Son normas y buenas prácticas que guían a los desarrolladores en la creación de código <strong>consistente, legible y de alta calidad</strong>. Facilitan la colaboración y reducen errores técnicos.
                </p>
            </header>

            {/* Sección HTML */}
            <div className="bg-white/50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    <FileCode className="text-orange-500" /> HTML5
                </h3>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Define la estructura y el significado del contenido web.
                </p>

                {/* Ventana de Código HTML */}
                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg mb-6">
                    <div className="bg-slate-800 px-4 py-2 flex gap-2 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs text-slate-400 ml-2 font-mono">index.html</span>
                    </div>
                    <pre className="p-4 bg-slate-950 text-blue-300 font-mono text-sm overflow-x-auto">
                        <code>{`<html>
  <head>
    <title>Mi página web</title>
  </head>
  <body>
    <h1>Bienvenidos</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
</html>`}</code>
                    </pre>
                </div>

                {/* Links de Documentación HTML */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 transition-colors group">
                        <span className="text-sm font-medium">WHATWG Living Standard</span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-orange-500" />
                    </a>
                    <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-orange-400 transition-colors group">
                        <span className="text-sm font-medium">MDN Web Docs HTML</span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-orange-500" />
                    </a>
                </div>
            </div>

            {/* Sección CSS */}
            <div className="bg-white/50 dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    <Palette className="text-blue-500" /> CSS3
                </h3>
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Controla la presentación visual: colores, fuentes y disposición espacial.
                </p>

                {/* Ventana de Código CSS */}
                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-lg mb-6">
                    <div className="bg-slate-800 px-4 py-2 flex gap-2 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs text-slate-400 ml-2 font-mono">style.css</span>
                    </div>
                    <pre className="p-4 bg-slate-950 text-pink-300 font-mono text-sm overflow-x-auto">
                        <code>{`body {
  font-family: 'Inter', sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #3b82f6;
  text-align: center;
}`}</code>
                    </pre>
                </div>

                {/* Links de Documentación CSS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 transition-colors group">
                        <span className="text-sm font-medium">W3C CSS Working Group</span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500" />
                    </a>
                    <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-400 transition-colors group">
                        <span className="text-sm font-medium">MDN Web Docs CSS</span>
                        <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Programacion;