import React from 'react';
import { Database, Table, FileJson, Layers, Code, ExternalLink, CheckCircle2, Info } from 'lucide-react';

function BasesDeDatos() {
    return (
        <section id="datos" className="animate-fade-in space-y-12 pb-20">
            {/* 1. Encabezado Técnico */}
            <header>
                <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4 border-b border-green-100 dark:border-slate-700 pb-2">
                    Sistemas de Gestión de Bases de Datos (SGBD)
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    Infraestructura de persistencia que garantiza la integridad, transaccionalidad y control de concurrencia en sistemas digitales.
                </p>
            </header>

            {/* 2. Comparativa de Paradigmas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="bg-blue-600 p-4 flex items-center gap-3 text-white">
                        <Table size={24} />
                        <h3 className="font-bold">Relacional (SQL)</h3>
                    </div>
                    <div className="p-6 space-y-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 italic">Esquemas rígidos y garantías ACID.</p>
                        <div className="bg-slate-950 rounded-xl p-4 font-mono text-[11px] text-blue-300">
                            <span className="text-pink-400">SELECT</span> nombre <span className="text-pink-400">FROM</span> alumnos;
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="bg-emerald-500 p-4 flex items-center gap-3 text-white">
                        <FileJson size={24} />
                        <h3 className="font-bold">No Relacional (NoSQL)</h3>
                    </div>
                    <div className="p-6 space-y-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 italic">Escalabilidad horizontal y esquemas flexibles.</p>
                        <div className="bg-slate-950 rounded-xl p-4 font-mono text-[11px] text-emerald-300">
                            db.alumnos.<span className="text-yellow-400">insert</span>({'{'} nombre: "Jhonathan" {'}'});
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. LABORATORIO DE MODELADO */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                        <Layers size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Laboratorio: Metodologías de Modelado</h3>
                        <p className="text-xs text-slate-500">Normalización progresiva para la optimización de datos</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { f: '1FN', t: 'Atomicidad', d: 'Elimina grupos repetitivos y asegura que cada atributo sea único.' },
                        { f: '2FN', t: 'Dependencia', d: 'Resuelve dependencias parciales de la clave primaria.' },
                        { f: '3FN', t: 'Integridad', d: 'Elimina dependencias transitivas para prevenir anomalías.' }
                    ].map((item, i) => (
                        <div key={i} className="p-5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle2 size={16} className="text-blue-500" />
                                <span className="font-bold text-xs text-blue-500">{item.f}</span>
                            </div>
                            <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm mb-1">{item.t}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Integración ORM/ODM */}
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-slate-100">
                    <Code className="text-indigo-500" /> Tecnologías de Conexión (CRUD)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-bold text-indigo-500 mb-3 uppercase tracking-widest">SQLAlchemy (Ejemplo 27)</p>
                        <pre className="text-[10px] text-slate-500 overflow-x-auto">
{`class Producto(Base):
    __tablename__ = 'productos'
    id = Column(Integer, primary_key=True)`}
                        </pre>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-bold text-emerald-500 mb-3 uppercase tracking-widest">Mongoose (Ejemplo 28)</p>
                        <pre className="text-[10px] text-slate-500 overflow-x-auto">
{`const MensajeSchema = new Schema({
    texto: String,
    fecha: Date
});`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* 5. BIBLIOGRAFÍA CON LINKS FUNCIONALES */}
            <footer className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Info size={14} /> Fuentes Académicas Consultadas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { 
                            a: 'Silberschatz, A. et al.', 
                            t: 'Database System Concepts (7th Ed.)', 
                            f: '2019',
                            link: 'https://www.db-book.com/' 
                        },
                        { 
                            a: 'Sadalage, P. & Fowler, M.', 
                            t: 'NoSQL Distilled', 
                            f: '2012',
                            link: 'https://martinfowler.com/books/nosql.html'
                        }
                    ].map((ref, i) => (
                        <a 
                            key={i} 
                            href={ref.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex justify-between items-center group hover:border-green-500 transition-all hover:shadow-md"
                        >
                            <div className="text-[10px]">
                                <p className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-green-500 transition-colors">{ref.t}</p>
                                <p className="text-slate-500 italic">{ref.a} ({ref.f})</p>
                            </div>
                            <ExternalLink size={14} className="text-slate-300 group-hover:text-green-500 transition-colors" />
                        </a>
                    ))}
                </div>
            </footer>
        </section>
    );
}

export default BasesDeDatos;