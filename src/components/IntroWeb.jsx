import React from 'react';
import { ExternalLink, BookOpenText } from 'lucide-react'; // Iconos para resaltar links

function IntroWeb() {
    return (
        <section id="intro-web" className="animate-fade-in">
            {/* Título Principal con un acento de color */}
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b border-blue-100 dark:border-slate-700 pb-2">
                Introducción a la Web
            </h2>
            
            {/* Párrafos con espaciado y lectura mejorada */}
            <div className="space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                    La web fue concebida para facilitar la colaboración entre científicos y académicos, 
                    permitiéndoles compartir información de manera eficiente. En 1989,<strong>Tim Berners-Lee</strong> 
                    desarrolló el concepto de la web mientras trabajaba en el <strong>CERN</strong>, reconociendo la necesidad 
                    de un sistema que enlazara documentos de investigación (Berners-Lee & Fischetti, 2000).
                </p>
                <p>
                    En 1991, se lanzó el primer sitio web desde el CERN, marcando el inicio de la 
                    <strong> World Wide Web</strong>. Este sitio revolucionó el acceso a la información a nivel global 
                    (Berners-Lee, 1999).
                </p>
            </div>

            {/* Caja de Enlace Destacado */}
            <div className="my-8">
                <a 
                    href="http://info.cern.ch/hypertext/WWW/TheProject.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all group shadow-sm"
                >
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold underline decoration-2 underline-offset-4">
                        Visitar el primer sitio web de la historia (CERN)
                    </span>
                </a>
            </div>
            
            {/* Sección de Referencias formateada */}
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    <BookOpenText size={20} className="text-blue-500" />
                    Referencias Bibliográficas
                </h3>
                <ul className="space-y-3">
                    <li className="pl-4 border-l-2 border-slate-300 dark:border-slate-600 text-sm text-slate-600 dark:text-slate-400 italic">
                        Berners-Lee, T., & Fischetti, M. (2000). 
                        <span className="text-slate-800 dark:text-slate-200 not-italic font-medium"> Tejiendo la Web: El diseño original y el destino final de la World Wide Web.</span> 
                        Harper.
                    </li>
                    <li className="pl-4 border-l-2 border-slate-300 dark:border-slate-600 text-sm text-slate-600 dark:text-slate-400 italic">
                        Berners-Lee, T. (1999). 
                        <span className="text-slate-800 dark:text-slate-200 not-italic font-medium"> Weaving the Web.</span> 
                        HarperSanFrancisco.
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default IntroWeb;