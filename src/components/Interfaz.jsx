import React from 'react';
import { Layout, Share2, MessageSquare, ShoppingCart, Layers, Zap, Smartphone, ExternalLink } from 'lucide-react';

function Interfaz() {
    return (
        <section id="interfaz" className="animate-fade-in space-y-10">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Diseño de Interfaz Dinámica
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Es la disciplina de crear entornos digitales que no solo son bellos, sino que <strong>reaccionan</strong>. Una interfaz dinámica se adapta al usuario, a los datos y al dispositivo en tiempo real.
                </p>
            </header>

            {/* Grid de Aplicaciones Reales */}
            <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-200">
                    <Layout className="text-blue-500" size={24} /> Casos de Uso en el Mundo Real
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tarjeta Redes Sociales */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <Share2 className="text-blue-400 mb-4" size={32} />
                        {/* AGREGADO: text-slate-900 dark:text-white */}
                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Redes Sociales</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Actualización de feeds y notificaciones instantáneas sin recargar. 
                            <span className="block mt-2 text-xs italic opacity-70">(McCarthy, 2020)</span>
                        </p>
                    </div>

                    {/* Tarjeta Mensajería */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <MessageSquare className="text-green-500 mb-4" size={32} />
                        {/* AGREGADO: text-slate-900 dark:text-white */}
                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Mensajería</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Comunicación bidireccional inmediata y estados de "escribiendo..." en tiempo real.
                        </p>
                    </div>

                    {/* Tarjeta E-commerce */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <ShoppingCart className="text-orange-500 mb-4" size={32} />
                        {/* AGREGADO: text-slate-900 dark:text-white */}
                        <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">E-commerce</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Recomendaciones personalizadas y carritos que se actualizan al instante.
                            <span className="block mt-2 text-xs italic opacity-70">(Smith & Johnson, 2019)</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Sección de Avances con diseño de "Lista de Características" */}
            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-semibold mb-8 text-center text-blue-800 dark:text-blue-300">Pilares de la Tecnología Moderna</h3>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="bg-blue-500 p-2 rounded-lg text-white"><Layers size={20} /></div>
                        <div>
                            <h4 className="font-bold">Frameworks de Componentes</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">React, Angular y Vue.js para crear piezas reutilizables. <cite className="text-xs opacity-60">(Lee, 2020)</cite></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-yellow-500 p-2 rounded-lg text-white"><Zap size={20} /></div>
                        <div>
                            <h4 className="font-bold">Comunicación Instantánea</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">WebSockets para intercambio de datos sin latencia. <cite className="text-xs opacity-60">(Miller, 2021)</cite></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-purple-500 p-2 rounded-lg text-white"><Smartphone size={20} /></div>
                        <div>
                            <h4 className="font-bold">Diseño Responsivo Adaptable</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Flexbox y CSS Grid para una experiencia perfecta en móviles. <cite className="text-xs opacity-60">(Garcia, 2021)</cite></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Referencias en formato de lista técnica */}
            <footer className="pt-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Bibliografía Técnica</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {[
                        { aut: 'Brown, J.', tit: 'Real-time Data and Analytics Interfaces', url: 'https://www.techpress.com' },
                        { aut: 'Garcia, M.', tit: 'Responsive Web Design and Accessibility', url: 'https://www.webtechpub.com' },
                        { aut: 'Lee, R.', tit: 'Modern UI Frameworks', url: 'https://www.uxdesignjournal.com' },
                        { aut: 'McCarthy, S.', tit: 'Dynamic Interfaces in Social Media', url: 'https://www.userexperiencestudies.com' }
                    ].map((ref, i) => (
                        <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" 
                           className="group flex items-center justify-between text-xs p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
                            <span className="text-slate-600 dark:text-slate-400"><strong>{ref.aut}</strong> - {ref.tit}</span>
                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 text-blue-500" />
                        </a>
                    ))}
                </div>
            </footer>
        </section>
    );
}

export default Interfaz;