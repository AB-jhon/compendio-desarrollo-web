import React, { useState } from 'react';
import { History, Play, RotateCcw, Monitor, Boxes, ExternalLink, Activity, EyeOff } from 'lucide-react';

function Animaciones() {
    // Estado booleano para disparar la animación de todos los puntos a la vez
    const [reproducir, setReproducir] = useState(false);

    const easings = [
        { name: 'Linear', timing: 'linear' },
        { name: 'Ease-In', timing: 'ease-in' },
        { name: 'Ease-Out', timing: 'ease-out' },
        { name: 'Elastic (Cubic)', timing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
    ];

    return (
        <section id="animaciones" className="animate-fade-in space-y-10">
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Evolución y Estándares de Animación Web
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Las animaciones introducen una dimensión temporal que mejora la comprensión de interfaces y genera experiencias intuitivas.
                </p>
            </header>

            {/* LABORATORIO DE EASING - Implementación funcional del Ejemplo 21 */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 mb-6 text-blue-400">
                    <Activity size={20} />
                    <h3 className="font-bold uppercase tracking-widest text-xs">Laboratorio de Easing (Ejemplo 21)</h3>
                </div>
                
                <div className="space-y-6">
                    {easings.map((e) => (
                        <div key={e.name} className="space-y-2">
                            <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                                <span>{e.name}</span>
                                <span className="text-blue-500/50">{e.name === 'Elastic (Cubic)' ? 'Custom Bezier' : 'Standard CSS'}</span>
                            </div>
                            <div className="relative h-8 bg-slate-800/50 rounded-full flex items-center px-1 overflow-hidden border border-slate-700/50">
                                <div 
                                    className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-1000"
                                    style={{ 
                                        // Aplicamos la lógica de movimiento basada en el estado
                                        marginLeft: reproducir ? 'calc(100% - 1.5rem)' : '0rem',
                                        transitionTimingFunction: e.timing
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 flex justify-center gap-4">
                    <button 
                        onClick={() => setReproducir(!reproducir)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-black transition-all active:scale-95 shadow-lg shadow-blue-900/20"
                    >
                        {reproducir ? <RotateCcw size={18} /> : <Play size={18} />}
                        {reproducir ? 'REINICIAR' : 'INICIAR PRUEBA'}
                    </button>
                </div>
            </div>

            {/* Línea de Tiempo Visual */}
            <div className="relative border-l-2 border-blue-200 dark:border-slate-700 ml-4 md:ml-6 space-y-12">
                <div className="relative pl-8 group">
                    <div className="absolute -left-3 top-1 bg-white dark:bg-slate-900 border-2 border-cyan-500 rounded-full p-1 group-hover:scale-125 transition-transform">
                        <Monitor size={14} className="text-cyan-500 fill-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">CSS3 - Animación Declarativa</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Uso de <code>@keyframes</code> para optimizar la ejecución mediante aceleración por hardware (GPU), limitándose a propiedades como <code>transform</code> y <code>opacity</code>.
                    </p>
                </div>

                <div className="relative pl-8 group">
                    <div className="absolute -left-3 top-1 bg-white dark:bg-slate-900 border-2 border-purple-500 rounded-full p-1 group-hover:scale-125 transition-transform">
                        <Boxes size={14} className="text-purple-500 fill-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Presente - Web Animations API (WAAPI)</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Combina el rendimiento de CSS con el control lógico de JS, permitiendo pausar, reanudar y sincronizar secuencias complejas.
                    </p>
                </div>
            </div>

            {/* ACCESIBILIDAD */}
            <div className="flex items-start gap-4 p-5 bg-blue-50 dark:bg-slate-800/80 border-l-4 border-blue-500 rounded-r-2xl">
                <EyeOff size={24} className="text-blue-500 shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1 uppercase text-xs tracking-widest">Compromiso de Accesibilidad</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                        Implementamos <code>prefers-reduced-motion</code> para garantizar que usuarios con sensibilidad visual reciban una experiencia libre de distracciones o mareo cinético.
                    </p>
                </div>
            </div>

            {/* Recursos y Documentación */}
            <div className="mt-12 bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                    <History size={20} className="text-blue-500" /> Recursos Académicos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { label: 'W3C Animations', url: 'https://www.w3.org/TR/css3-animations/' },
                        { label: 'MDN Web Docs (2026)', url: 'https://developer.mozilla.org/' },
                        { label: 'WebAIM Accessibility', url: 'https://webaim.org/' }
                    ].map((ref, index) => (
                        <a 
                            key={index}
                            href={ref.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg text-sm hover:border-blue-400 transition-all group"
                        >
                            {ref.label}
                            <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-500" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Animaciones;