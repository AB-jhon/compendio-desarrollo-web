import React from 'react';
import { ClipboardList, Users, GitBranch, CheckCircle2, TrendingUp, BookOpen, ExternalLink } from 'lucide-react';

function Proyectos() {
    return (
        <section id="proyectos" className="animate-fade-in space-y-10 text-slate-700 dark:text-slate-300">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Gestión y Desarrollo de Proyectos Web
                </h2>
                <p className="text-lg leading-relaxed">
                    El éxito de un proyecto no depende solo del código, sino de una <strong>planificación estratégica</strong>, metodologías probadas y una colaboración eficiente entre equipos.
                </p>
            </header>

            {/* Metodologías Ágiles - Estilo Manifiesto */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30">
                <div className="flex items-center gap-3 mb-6">
                    <Users className="text-blue-600 dark:text-blue-400" size={28} />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Metodologías Ágiles</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="font-bold text-blue-700 dark:text-blue-300 uppercase text-xs tracking-widest">Valores del Manifiesto</h4>
                        <ul className="space-y-3">
                            {[
                                "Individuos e interacciones sobre procesos",
                                "Software funcionando sobre documentación",
                                "Colaboración con el cliente sobre contratos",
                                "Respuesta ante el cambio sobre planes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-blue-700 dark:text-blue-300 uppercase text-xs tracking-widest">Frameworks Populares</h4>
                        <div className="flex gap-4">
                            <div className="flex-1 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <span className="font-bold block text-indigo-600 dark:text-indigo-400">Scrum</span>
                                <span className="text-xs">Ciclos cortos (Sprints)</span>
                            </div>
                            <div className="flex-1 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                                <span className="font-bold block text-emerald-600 dark:text-emerald-400">Kanban</span>
                                <span className="text-xs">Flujo visual continuo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ciclo de Vida del Proyecto - Diagrama Conceptual */}
            

            {/* Gestión y KPIs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
                        <ClipboardList className="text-purple-500" /> Planificación y Alcance
                    </h3>
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border-l-4 border-l-purple-500 shadow-sm">
                        <p className="text-sm">Producto mínimo viable (MVP). Por ejemplo, en un E-commerce: Carrito, Catálogo y Pasarela de Pagos.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
                        <TrendingUp className="text-orange-500" /> Monitoreo KPIs (métricas)
                    </h3>
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border-l-4 border-l-orange-500 shadow-sm">
                        <ul className="text-sm space-y-1">
                            <li>• Tasa de conversión de usuarios</li>
                            <li>• Tiempo de carga (Performance)</li>
                            <li>• Tasa de errores en producción</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Control de Versiones - Estilo Terminal Git */}
            <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
                    <GitBranch className="text-red-500" /> Control de Versiones con Git
                </h3>
                <div className="bg-slate-950 rounded-2xl p-6 font-mono text-sm shadow-xl border border-slate-800">
                    <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-slate-500 mb-2"># Creando una nueva característica</p>
                    <p className="text-emerald-400">git checkout -b feature/nueva-interfaz</p>
                    <p className="text-slate-500 mt-4 mb-2"># Guardando cambios y fusionando</p>
                    <p className="text-emerald-400">git commit -m "Añade estilos de modo oscuro"</p>
                    <p className="text-emerald-400">git push origin main</p>
                </div>
            </div>

            {/* Bibliografía Académica */}
            <footer className="pt-10 border-t border-slate-200 dark:border-slate-800">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    <BookOpen size={16} /> Referencias del Módulo
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { aut: "Beck et al. (2001)", tit: "Manifesto for Agile Software Development", cat: "Agile Alliance" },
                        { aut: "PMI (2017)", tit: "PMBOK Guide 6th Edition", cat: "Project Management" },
                        { aut: "Chacon & Straub (2014)", tit: "Pro Git", cat: "Version Control" },
                        { aut: "DeMarco & Lister (2003)", tit: "Peopleware", cat: "Team Productivity" }
                    ].map((ref, i) => (
                        <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800 flex justify-between items-center group transition-all hover:border-blue-300">
                            <div className="text-xs">
                                <span className="font-bold block text-slate-800 dark:text-slate-200">{ref.tit}</span>
                                <span className="text-slate-500">{ref.aut} — {ref.cat}</span>
                            </div>
                            <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500" />
                        </div>
                    ))}
                </div>
            </footer>
        </section>
    );
}

export default Proyectos;