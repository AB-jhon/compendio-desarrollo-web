import React from 'react';
import { History, Play, Zap, Monitor, Boxes, ExternalLink } from 'lucide-react';

function Animaciones() {
    return (
        <section id="animaciones" className="animate-fade-in space-y-10">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Evolución de las Animaciones Web
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Desde los simples GIFs de los 90 hasta el renderizado 3D moderno, las animaciones han transformado la web en un espacio vivo y emocionante.
                </p>
            </header>

            {/* Línea de Tiempo Visual */}
            <div className="relative border-l-2 border-blue-200 dark:border-slate-700 ml-4 md:ml-6 space-y-12">
                
                {/* Años 90 */}
                <div className="relative pl-8">
                    <div className="absolute -left-3 top-1 bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-full p-1">
                        <Play size={14} className="text-blue-500 fill-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Años 90 - El Inicio con GIFs</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Los GIFs animados permitieron las primeras imágenes en bucle. Eran simples, pesados, pero revolucionarios para la época.
                    </p>
                </div>

                {/* Años 2000 */}
                <div className="relative pl-8">
                    <div className="absolute -left-3 top-1 bg-white dark:bg-slate-900 border-2 border-red-500 rounded-full p-1">
                        <Zap size={14} className="text-red-500 fill-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Años 2000 - La Era de Flash</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Adobe Flash dominó con animaciones complejas e interactivas. Marcó la era de los juegos y sitios web totalmente animados antes de su desaparición.
                    </p>
                </div>

                {/* CSS3 */}
                <div className="relative pl-8">
                    <div className="absolute -left-3 top-1 bg-white dark:bg-slate-900 border-2 border-cyan-500 rounded-full p-1">
                        <Monitor size={14} className="text-cyan-500 fill-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Finales 2000 - CSS Nativo</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Con CSS3, las <strong>Transitions</strong> y <strong>Keyframes</strong> permitieron animar elementos sin plugins externos, mejorando el rendimiento y la accesibilidad.
                    </p>
                </div>

                {/* Presente */}
                <div className="relative pl-8">
                    <div className="absolute -left-3 top-1 bg-white dark:bg-slate-900 border-2 border-purple-500 rounded-full p-1">
                        <Boxes size={14} className="text-purple-500 fill-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Presente - Canvas, SVG y 3D</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Hoy usamos <code>SVG</code> para vectores, <code>Canvas</code> para 2D y <code>WebGL</code> para experiencias 3D inmersivas, potenciadas por librerías como <strong>GSAP</strong>.
                    </p>
                </div>
            </div>

            {/* Sección de Referencias como Grid de Enlaces */}
            <div className="mt-12 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <History size={20} className="text-blue-500" /> Recursos y Documentación
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { label: 'Historia del GIF', url: 'https://www.adobe.com/es/creativecloud/file-types/image/raster/gif-file.html' },
                        { label: 'Legado de Flash', url: 'https://www.adobe.com/products/flash.html' },
                        { label: 'Guía CSS Animations', url: 'https://www.w3.org/TR/css3-animations/' },
                        { label: 'GreenSock (GSAP)', url: 'https://greensock.com/gsap/' },
                        { label: 'Anime.js', url: 'https://animejs.com/' },
                        { label: 'SVG & Canvas', url: 'https://www.svgviewer.dev/' }
                    ].map((ref, index) => (
                        <a 
                            key={index}
                            href={ref.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm group"
                        >
                            {ref.label}
                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Animaciones;