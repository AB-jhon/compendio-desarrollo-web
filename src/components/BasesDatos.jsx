import React from 'react';
import { Database, Table, FileJson, Info, ExternalLink, ListChecks } from 'lucide-react';

function BasesDatos() {
    return (
        <section id="bases-datos" className="animate-fade-in space-y-10">
            {/* Título Principal */}
            <header>
                <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 border-b border-blue-100 dark:border-slate-700 pb-2">
                    Sistemas de Gestión de Bases de Datos
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Son el motor que permite almacenar y recuperar información. La elección entre un modelo <strong>Relacional (SQL)</strong> o <strong>No Relacional (NoSQL)</strong> depende de la estructura de tus datos y la escalabilidad que necesites.
                </p>
            </header>

            {/* Comparativa SQL vs NoSQL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Panel SQL */}
                <div className="flex flex-col bg-white/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                    <div className="bg-blue-600 p-4 flex items-center gap-2 text-white">
                        <Table size={20} />
                        <h3 className="font-bold">Bases de Datos SQL</h3>
                    </div>
                    <div className="p-6 flex-grow">
                        <p className="text-sm mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            Organizadas en <strong>tablas</strong> rígidas. Ideales para transacciones seguras y datos con relaciones complejas.
                        </p>
                        
                        {/* Terminal SQL */}
                        <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs shadow-inner border border-slate-800">
                            <div className="flex justify-between text-slate-500 mb-2 border-b border-slate-800 pb-1">
                                <span>query_console.sql</span>
                                <span className="text-blue-400">PostgreSQL</span>
                            </div>
                            <pre className="text-blue-300 leading-relaxed">
{`SELECT nombre, edad 
FROM empleados 
WHERE edad > 30 
ORDER BY nombre;`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Panel NoSQL */}
                <div className="flex flex-col bg-white/50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                    <div className="bg-emerald-600 p-4 flex items-center gap-2 text-white">
                        <FileJson size={20} />
                        <h3 className="font-bold">Bases de Datos NoSQL</h3>
                    </div>
                    <div className="p-6 flex-grow">
                        <p className="text-sm mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                            Flexibles, basadas en <strong>documentos JSON</strong> o pares clave-valor. Ideales para Big Data y rápido crecimiento.
                        </p>
                        
                        {/* Terminal NoSQL */}
                        <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs shadow-inner border border-slate-800">
                            <div className="flex justify-between text-slate-500 mb-2 border-b border-slate-800 pb-1">
                                <span>mongosh_shell.js</span>
                                <span className="text-emerald-400">MongoDB</span>
                            </div>
                            <pre className="text-emerald-300 leading-relaxed">
{`db.empleados.find({ 
  edad: { $gt: 30 } 
}).sort({ 
  nombre: 1 
});`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* Cuadro de Información Adicional */}
            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl flex gap-4 border border-slate-200 dark:border-slate-700">
                <Info className="text-blue-500 shrink-0" size={24} />
                <div className="text-sm space-y-2">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">¿Sabías qué?</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                        La mayoría de las aplicaciones modernas hoy en día utilizan un enfoque de <strong>Persistencia Políglota</strong>, es decir, usan SQL para el dinero/usuarios y NoSQL para el feed/notificaciones.
                    </p>
                </div>
            </div>

            {/* Referencias Bibliográficas */}
            <footer className="space-y-4 pt-4">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest">
                    <ListChecks size={16} /> Fuentes de Consulta
                </h4>
                <div className="space-y-3">
                    <div className="p-4 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 text-sm">
                        <p className="text-slate-700 dark:text-slate-300">
                            <strong>Elmasri, R., & Navathe, S. B. (2016).</strong> 
                            <span className="italic"> Fundamentals of Database Systems.</span> Pearson.
                        </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 text-sm">
                        <p className="text-slate-700 dark:text-slate-300">
                            <strong>Sadalage, P. J., & Fowler, M. (2012).</strong> 
                            <span className="italic"> NoSQL Distilled: A Brief Guide.</span> Addison-Wesley.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default BasesDatos;