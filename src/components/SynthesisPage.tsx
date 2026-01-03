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
              <span className="cyber-text-pink">18</span><span className="text-white">,</span>
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

      {/* Tableau de Synthèse */}
      <CyberWindow title="TABLEAU_SYNTHESE.NEURAL" variant="cyan" className="mb-8">
        <div className="space-y-6">
          {/* Header Info */}
          <div className="text-center space-y-2 border-b border-cyan-400/30 pb-4">
            <h2 className="text-xl font-bold cyber-text-cyan">BTS SERVICES INFORMATIQUES AUX ORGANISATIONS - SESSION 2026</h2>
            <h3 className="text-lg cyber-text-yellow">Tableau de synthèse des réalisations professionnelles</h3>
            <div className="space-y-1 text-sm">
              <p><span className="cyber-text-cyan">NOM et prénom :</span> <span className="cyber-text-yellow">MUNOZ Raphaël</span></p>
              <p><span className="cyber-text-cyan">Centre de formation :</span> <span className="cyber-text-yellow">Lycée Robert Schuman</span></p>
              <p><span className="cyber-text-cyan">Option :</span> <span className="cyber-text-pink">☑ SLAM</span> <span className="text-gray-500">☐ SISR</span></p>
              <p><span className="cyber-text-cyan">Lien vers votre portfolio:</span> <a href="https://portfolio-gaming-ave-zf9d.bolt.host/" className=\"cyber-text-yellow hover:text-white">https://portfolio-gaming-ave-zf9d.bolt.host/</a></p>
            </div>
          </div>

          {/* Tableau principal */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="cyber-text-cyan">
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-left min-w-[200px]">
                    Réalisations professionnelles<br/>
                    <span className="text-xs text-gray-400">(intitulé et liste des documents et productions associés)</span>
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[80px]">
                    Période<br/>
                    <span className="text-xs text-gray-400">(JJ/MM/AA)</span>
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[100px]">
                    Gérer le patrimoine informatique
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[100px]">
                    Répondre aux incidents et aux demandes d'assistance et d'évolution
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[100px]">
                    Développer la présence en ligne de l'organisation
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[100px]">
                    Travailler en mode projet
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[100px]">
                    Mettre à disposition des utilisateurs un service informatique
                  </th>
                  <th className="border border-cyan-400/50 p-2 bg-gray-900/50 text-center min-w-[100px]">
                    Organiser son développement professionnel
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Réalisation en cours de formation */}
                <tr>
                  <td colSpan={8} className="border border-cyan-400/50 p-2 bg-purple-900/20 cyber-text-purple font-bold text-center">
                    Réalisation en cours de formation
                  </td>
                </tr>
                
                {/* Projets de formation */}
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet cinéma (PHP)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Dec-23</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet Aéroport (PHP)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Feb-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet LPRS (PHP)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Jan-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet LPRS (JAVA)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Feb-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet pendu (JAVA)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Feb-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet Sudoku (JAVA)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Mar-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet gestion de stock (java)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">May-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet ToDoList (JAVAFX)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Dec-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Réalisation d'un portfolio</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Jan-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Projet HSP (PHP)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Sep-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>

                {/* Réalisations en milieu professionnel première année */}
                <tr>
                  <td colSpan={8} className="border border-cyan-400/50 p-2 bg-yellow-900/20 cyber-text-yellow font-bold text-center">
                    Réalisations en milieu professionnel en cours de première année
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Création d'une équipe Teams pour une gestion de projet</td>
                  <td className="border border-cyan-400/50 p-2 text-center">May-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Rédaction des différents rapport de réunion d'équipe.</td>
                  <td className="border border-cyan-400/50 p-2 text-center">May-24</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                </tr>

                {/* Réalisations en milieu professionnel seconde année */}
                <tr>
                  <td colSpan={8} className="border border-cyan-400/50 p-2 bg-pink-900/20 cyber-text-pink font-bold text-center">
                    Réalisations en milieu professionnel en cours de seconde année
                  </td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Installation et configuration de poste informatique</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Mar-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Configuration réseau (VOIP cisco)</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Mar-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Maintenance Matérielle</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Mar-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Support technique</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Mar-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">Configuration pc en h4</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Oct-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
                
                <tr className="hover:bg-gray-800/30">
                  <td className="border border-cyan-400/50 p-2">configuration d'imprimante</td>
                  <td className="border border-cyan-400/50 p-2 text-center">Oct-25</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center cyber-text-yellow">X</td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                  <td className="border border-cyan-400/50 p-2 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Download Button */}
          <div className="flex justify-center pt-6">
            <a
              href="/tableau-synthese-raphael-munoz.pdf"
              download="tableau-synthese-raphael-munoz.pdf"
              className="cyber-button flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger PDF Original</span>
            </a>
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
              18 Total
            </div>
          </div>
        </div>
      </CyberWindow>
    </div>
  );
};

export default SynthesisPage;