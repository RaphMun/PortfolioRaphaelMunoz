import React from 'react';
import { Download, FileText, Calendar, User, GraduationCap } from 'lucide-react';
import CyberWindow from './CyberWindow';
import TypingText from './TypingText';

const SynthesisPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <CyberWindow title="SYNTHESIS_TABLE.NEURAL" variant="purple" className="mb-8">
        <div className="space-y-4">
          <div className="text-gray-300">
            <span className="cyber-text-cyan">const</span>{' '}
            <span className="cyber-text-purple">officialDocument</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="cyber-text-yellow">{'{'}</span>
          </div>
          
          <div className="pl-4 space-y-2">
            <div>
              <span className="cyber-text-cyan">student:</span>{' '}
              <span className="cyber-text-yellow">"MUNOZ Raphaël"</span><span className="text-white">,</span>
            </div>
            <div>
              <span className="cyber-text-cyan">academy:</span>{' '}
              <span className="cyber-text-yellow">"Lycée Robert Schuman"</span><span className="text-white">,</span>
            </div>
            <div>
              <span className="cyber-text-cyan">program:</span>{' '}
              <span className="cyber-text-yellow">"BTS SIO SLAM"</span><span className="text-white">,</span>
            </div>
            <div>
              <span className="cyber-text-cyan">session:</span>{' '}
              <span className="cyber-text-pink">"2026"</span><span className="text-white">,</span>
            </div>
            <div>
              <span className="cyber-text-cyan">totalProjects:</span>{' '}
              <span className="cyber-text-pink">15</span><span className="text-white">,</span>
            </div>
            <div>
              <span className="cyber-text-cyan">competenciesValidated:</span>{' '}
              <span className="cyber-text-pink">6</span>
            </div>
          </div>
          
          <div className="cyber-text-yellow">{'};'}</div>
          
          <div className="pt-4 text-gray-500">
            <TypingText 
              text="// Document officiel de synthèse des réalisations professionnelles BTS SIO SLAM" 
              speed={30}
              color="#b300ff"
            />
          </div>
        </div>
      </CyberWindow>

      {/* PDF Viewer */}
      <CyberWindow title="PDF_VIEWER.NEURAL" variant="cyan" className="mb-8">
        <div className="space-y-6">
          {/* Download Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FileText className="w-8 h-8 cyber-text-cyan" />
              <div>
                <h3 className="text-lg font-bold cyber-text-cyan">Tableau de Synthèse Officiel</h3>
                <p className="text-gray-400 text-sm">Document PDF - Session 2026</p>
              </div>
            </div>
            
            <a
              href="/tableau-synthese-raphael-munoz.pdf"
              download="tableau-synthese-raphael-munoz.pdf"
              className="cyber-button flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger PDF</span>
            </a>
          </div>

          {/* PDF Embed */}
          <div className="cyber-border-cyan rounded-lg overflow-hidden">
            <iframe
              src="/tableau-synthese-raphael-munoz.pdf"
              width="100%"
              height="800px"
              className="border-0"
              title="Tableau de Synthèse - Raphaël Munoz"
            >
              <p className="text-center text-gray-400 p-8">
                Votre navigateur ne supporte pas l'affichage des PDF. 
                <a 
                  href="/tableau-synthese-raphael-munoz.pdf" 
                  className="cyber-text-cyan hover:text-white ml-2"
                  download
                >
                  Téléchargez le document ici.
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </CyberWindow>

      {/* Summary Stats */}
      <CyberWindow title="DOCUMENT_STATS.NEURAL" variant="yellow" className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="cyber-card p-4 text-center transform hover:scale-105 transition-all duration-300">
            <User className="w-8 h-8 mx-auto mb-3 cyber-text-yellow" />
            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
              Étudiant
            </div>
            <div className="text-lg font-bold font-mono cyber-text-yellow">
              MUNOZ R.
            </div>
          </div>

          <div className="cyber-card p-4 text-center transform hover:scale-105 transition-all duration-300">
            <GraduationCap className="w-8 h-8 mx-auto mb-3 cyber-text-cyan" />
            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
              Formation
            </div>
            <div className="text-lg font-bold font-mono cyber-text-cyan">
              BTS SLAM
            </div>
          </div>

          <div className="cyber-card p-4 text-center transform hover:scale-105 transition-all duration-300">
            <Calendar className="w-8 h-8 mx-auto mb-3 cyber-text-pink" />
            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
              Session
            </div>
            <div className="text-lg font-bold font-mono cyber-text-pink">
              2026
            </div>
          </div>

          <div className="cyber-card p-4 text-center transform hover:scale-105 transition-all duration-300">
            <FileText className="w-8 h-8 mx-auto mb-3 cyber-text-purple" />
            <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold">
              Projets
            </div>
            <div className="text-lg font-bold font-mono cyber-text-purple">
              15 Total
            </div>
          </div>
        </div>
      </CyberWindow>

      {/* Competencies Overview */}
      <CyberWindow title="COMPETENCIES_MATRIX.NEURAL" variant="pink" className="mb-8">
        <div className="space-y-4">
          <div className="text-gray-300">
            <span className="cyber-text-cyan">const</span>{' '}
            <span className="cyber-text-pink">competenciesMatrix</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="cyber-text-yellow">{'['}</span>
          </div>
          
          <div className="pl-4 space-y-3">
            {[
              "Gérer le patrimoine informatique",
              "Répondre aux incidents et demandes d'assistance",
              "Développer la présence en ligne de l'organisation",
              "Travailler en mode projet",
              "Mettre à disposition un service informatique",
              "Organiser son développement professionnel"
            ].map((competency, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                <span className="cyber-text-yellow">"{competency}"</span>
                <span className="text-white">,</span>
              </div>
            ))}
          </div>
          
          <div className="cyber-text-yellow">{']; '}</div>
          
          <div className="pt-4 text-gray-500">
            <TypingText 
              text="// Six compétences principales validées à travers les réalisations professionnelles" 
              speed={35}
              color="#ff0080"
            />
          </div>
        </div>
      </CyberWindow>
    </div>
  );
};

export default SynthesisPage;