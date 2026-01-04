import React, { useState, useEffect } from 'react';
import { Terminal, User, Briefcase, Mail, Phone, Github, Cpu, Zap, Shield } from 'lucide-react';
import CyberBackground from './components/CyberBackground';
import TypingText from './components/TypingText';
import CyberWindow from './components/CyberWindow';
import GameStats from './components/GameStats';
import SynthesisPage from './components/SynthesisPage';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'about', label: 'rafael.exe --infos', icon: User },
    { id: 'projects', label: 'rafael.exe --projets', icon: Briefcase },
    { id: 'contact', label: 'rafael.exe --contact', icon: Mail },
    { id: 'synthesis', label: 'rafael.exe --synthèse', icon: Terminal }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden cyber-scrollbar">
      <CyberBackground />
      
      {/* Header Terminal */}
      <header className="relative z-10 p-6 border-b border-cyan-400/30 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Cpu className="w-8 h-8 cyber-text-yellow" />
              <Shield className="w-6 h-6 cyber-text-cyan" />
            </div>
            <div className="cyberpunk-title text-xl">
              <TypingText
                text="RAFAEL.EXE INITIALISÉ"
                className="glitch-text"
                data-text="RAFAEL.EXE INITIALISÉ"
                color="#fcee09"
              />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(index)}
                className={`cyber-button flex items-center space-x-2 px-4 py-2 transition-all duration-300 ${
                  currentSection === index ? 'active' : ''
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="font-mono text-sm">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto p-6 mt-8 space-y-8">
        {showContent && (
          <>
            {/* About Section */}
            {currentSection === 0 && (
              <div className="space-y-8">
                <CyberWindow title="PROFIL_NEURAL.JS" variant="yellow" className="mb-8">
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <span className="cyber-text-cyan">const</span>{' '}
                      <span className="cyber-text-yellow">developpeurCyber</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="cyber-text-pink">{'{'}</span>
                    </div>

                    <div className="pl-4 space-y-2">
                      <div>
                        <span className="cyber-text-cyan">nom:</span>{' '}
                        <span className="cyber-text-yellow">"Raphaël Munoz"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">statut:</span>{' '}
                        <span className="cyber-text-yellow">"Étudiant Cybernétique BTS SIO SLAM 2"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">académie:</span>{' '}
                        <span className="cyber-text-yellow">"Lycée Robert Schuman"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">spécialisation:</span>{' '}
                        <span className="cyber-text-yellow">"Réseaux Neuraux : PHP, Java & Web"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">passion:</span>{' '}
                        <span className="cyber-text-yellow">"Jeux Cyberpunk & Matrice de Code"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">niveauActuel:</span>{' '}
                        <span className="cyber-text-pink">BTS_SLAM_2.exe</span>
                      </div>
                    </div>

                    <div className="cyber-text-pink">{'};'}</div>

                    <div className="pt-4 text-gray-500">
                      <TypingText
                        text="// Chemins neuraux optimisés pour le développement et l'univers du jeu cyberpunk"
                        speed={30}
                        color="#00f5ff"
                      />
                    </div>
                  </div>
                </CyberWindow>

                {/* Section Parcours */}
                <CyberWindow title="CHRONOLOGIE.NEURAL" variant="pink" className="mb-8">
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <span className="cyber-text-cyan">const</span>{' '}
                      <span className="cyber-text-pink">chronologieCyber</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="cyber-text-yellow">{'['}</span>
                    </div>

                    <div className="pl-4 space-y-4">
                      <div className="cyber-card p-4 cyber-border">
                        <div className="cyber-text-yellow">{'{'}</div>
                        <div className="pl-4 space-y-1">
                          <div>
                            <span className="cyber-text-cyan">période:</span>{' '}
                            <span className="cyber-text-yellow">"2020-2023"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">phase:</span>{' '}
                            <span className="cyber-text-yellow">"2nde SN → Terminale"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">réussite:</span>{' '}
                            <span className="cyber-text-pink">"Bac mention Bien"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">académie:</span>{' '}
                            <span className="cyber-text-yellow">"Lycée Robert Schuman"</span>
                          </div>
                        </div>
                        <div className="cyber-text-yellow">{'}'}<span className="text-white">,</span></div>
                      </div>

                      <div className="cyber-card p-4 cyber-border-pink">
                        <div className="cyber-text-yellow">{'{'}</div>
                        <div className="pl-4 space-y-1">
                          <div>
                            <span className="cyber-text-cyan">période:</span>{' '}
                            <span className="cyber-text-yellow">"2023-2025"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">programme:</span>{' '}
                            <span className="cyber-text-yellow">"Formation Neurale BTS SIO SLAM"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">phaseActuelle:</span>{' '}
                            <span className="cyber-text-pink">"Niveau 2 - Formation Avancée"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">académie:</span>{' '}
                            <span className="cyber-text-yellow">"Lycée Robert Schuman"</span>
                          </div>
                        </div>
                        <div className="cyber-text-yellow">{'}'}</div>
                      </div>
                    </div>

                    <div className="cyber-text-yellow">{']; '}</div>
                  </div>
                </CyberWindow>
                <GameStats />
              </div>
            )}

            {/* Section Projets */}
            {currentSection === 1 && (
              <CyberWindow title="BASE_DE_DONNEES_PROJETS.NEURAL" variant="purple" className="mb-8">
                <div className="space-y-6">
                  <div className="text-gray-300">
                    <span className="cyber-text-cyan">const</span>{' '}
                    <span className="cyber-text-purple">projetsCyber</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="cyber-text-yellow">{'['}</span>
                  </div>

                  <div className="pl-4 space-y-4">
                    {/* Projet Cinéma */}
                    <div className="cyber-card p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="cyber-text-yellow">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="cyber-text-cyan">nomProjet:</span>{' '}
                          <span className="cyber-text-yellow">"Réseau Neuronal Cinéma"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">langagePrincipal:</span>{' '}
                          <span className="cyber-text-yellow">"PHP.exe"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">typeSysteme:</span>{' '}
                          <span className="cyber-text-yellow">"Interface Neurale Web"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">statut:</span>{' '}
                          <span className="cyber-text-pink">"MISSION_COMPLETÉE"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">description:</span>{' '}
                          <span className="cyber-text-yellow">"Système neuronal complet de gestion cinéma"</span>
                        </div>
                      </div>
                      <div className="cyber-text-yellow">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 cyber-bg-purple px-3 py-1 rounded-full text-sm border border-purple-500">
                          <span>🎬</span>
                          <span className="cyber-text-purple">Cinema</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-cyan px-3 py-1 rounded-full text-sm border border-cyan-400">
                          <span>🐘</span>
                          <span className="cyber-text-cyan">PHP</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Projet Aéroport */}
                    <div className="cyber-card p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="cyber-text-yellow">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="cyber-text-cyan">nomProjet:</span>{' '}
                          <span className="cyber-text-yellow">"Système de Contrôle Aéroport"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">langagePrincipal:</span>{' '}
                          <span className="cyber-text-yellow">"PHP.exe"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">typeSysteme:</span>{' '}
                          <span className="cyber-text-yellow">"Interface de Gestion des Vols"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">statut:</span>{' '}
                          <span className="cyber-text-pink">"MISSION_COMPLETÉE"</span>
                        </div>
                      </div>
                      <div className="cyber-text-yellow">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 cyber-bg-cyan px-3 py-1 rounded-full text-sm border border-cyan-400">
                          <span>✈️</span>
                          <span className="cyber-text-cyan">Airport</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-cyan px-3 py-1 rounded-full text-sm border border-cyan-400">
                          <span>🐘</span>
                          <span className="cyber-text-cyan">PHP</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Projets LPRS */}
                    <div className="cyber-card p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="cyber-text-yellow">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="cyber-text-cyan">nomProjet:</span>{' '}
                          <span className="cyber-text-yellow">"Systèmes Neuraux LPRS"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">langagesPrincipaux:</span>{' '}
                          <span className="cyber-text-yellow">["PHP.exe", "Java.neural"]</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">typeSysteme:</span>{' '}
                          <span className="cyber-text-yellow">"Interface Multi-Plateforme"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">statut:</span>{' '}
                          <span className="cyber-text-pink">"MISSION_COMPLETÉE"</span>
                        </div>
                      </div>
                      <div className="cyber-text-yellow">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 cyber-bg-yellow px-3 py-1 rounded-full text-sm border border-yellow-400">
                          <span>🏫</span>
                          <span className="cyber-text-yellow">LPRS</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-cyan px-3 py-1 rounded-full text-sm border border-cyan-400">
                          <span>🐘</span>
                          <span className="cyber-text-cyan">PHP</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-red px-3 py-1 rounded-full text-sm border border-red-500">
                          <span>☕</span>
                          <span className="cyber-text-red">Java</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Projets Java */}
                    <div className="cyber-card p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="cyber-text-yellow">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="cyber-text-cyan">categorie:</span>{' '}
                          <span className="cyber-text-yellow">"Collection Neurale Java"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">programmesNeuraux:</span>{' '}
                          <span className="cyber-text-yellow">["Pendu.java", "Sudoku.neural", "GestionnaireStock.exe", "ListeTaches.fx"]</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">langagePrincipal:</span>{' '}
                          <span className="cyber-text-yellow">"Java.neural / JavaFX.interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">statut:</span>{' '}
                          <span className="cyber-text-pink">"TOUTES_MISSIONS_COMPLETÉES"</span>
                        </div>
                      </div>
                      <div className="cyber-text-yellow">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 cyber-bg-red px-3 py-1 rounded-full text-sm border border-red-500">
                          <span>🎯</span>
                          <span className="cyber-text-red">Pendu</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-red px-3 py-1 rounded-full text-sm border border-red-500">
                          <span>🔢</span>
                          <span className="cyber-text-red">Sudoku</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-red px-3 py-1 rounded-full text-sm border border-red-500">
                          <span>📦</span>
                          <span className="cyber-text-red">Stock</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-purple px-3 py-1 rounded-full text-sm border border-purple-500">
                          <span>✅</span>
                          <span className="cyber-text-purple">TodoList</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Portfolio */}
                    <div className="cyber-card p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="cyber-text-yellow">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="cyber-text-cyan">nomProjet:</span>{' '}
                          <span className="cyber-text-yellow">"Interface Portfolio Cyberpunk"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">langagePrincipal:</span>{' '}
                          <span className="cyber-text-yellow">"React.neural + TypeScript.exe"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">typeSysteme:</span>{' '}
                          <span className="cyber-text-yellow">"Interface Web Neurale"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">statut:</span>{' '}
                          <span className="cyber-text-cyan">"DEVELOPPEMENT_ACTIF"</span>
                        </div>
                      </div>
                      <div className="cyber-text-yellow">{'}'}</div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 cyber-bg-cyan px-3 py-1 rounded-full text-sm border border-cyan-400">
                          <span>🎮</span>
                          <span className="cyber-text-cyan">Cyberpunk</span>
                        </div>
                        <div className="flex items-center space-x-2 cyber-bg-yellow px-3 py-1 rounded-full text-sm border border-yellow-400">
                          <span>⚛️</span>
                          <span className="cyber-text-yellow">React</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="cyber-text-yellow">{']; '}</div>
                  <div className="text-gray-500">
                    <TypingText
                      text="// Base de données de projets neuraux compilée pendant le protocole de formation BTS SIO SLAM"
                      speed={40}
                      color="#b300ff"
                    />
                  </div>
                </div>
              </CyberWindow>
            )}

            {/* Synthesis Section */}
            {currentSection === 3 && (
              <SynthesisPage />
            )}

            {/* Section Contact */}
            {currentSection === 2 && (
              <CyberWindow title="PROTOCOLE_CONTACT.NEURAL" variant="default" className="mb-8">
                <div className="space-y-4">
                  <div className="text-gray-300">
                    <span className="cyber-text-cyan">const</span>{' '}
                    <span className="cyber-text-cyan">protocoleContactNeural</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="cyber-text-yellow">{'{'}</span>
                  </div>

                  <div className="pl-4 space-y-4">
                    <div className="flex items-center space-x-4 group cursor-pointer hover:cyber-bg-cyan p-3 rounded-lg transition-all duration-300 cyber-card">
                      <Phone className="w-5 h-5 cyber-text-cyan" />
                      <div>
                        <span className="cyber-text-cyan">telephoneNeural:</span>{' '}
                        <a href="tel:0695869618" className="cyber-text-yellow hover:text-white">
                          "0695869618"
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer hover:cyber-bg-yellow p-3 rounded-lg transition-all duration-300 cyber-card">
                      <Mail className="w-5 h-5 cyber-text-yellow" />
                      <div>
                        <span className="cyber-text-cyan">emailNeural:</span>{' '}
                        <a href="mailto:rafael.munoz@outlook.fr" className="cyber-text-yellow hover:text-white">
                          "rafael.munoz@outlook.fr"
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group cursor-pointer hover:cyber-bg-pink p-3 rounded-lg transition-all duration-300 cyber-card">
                      <Github className="w-5 h-5 cyber-text-pink" />
                      <div>
                        <span className="cyber-text-cyan">referentielNeural:</span>{' '}
                        <span className="cyber-text-yellow">"github.com/rafael-munoz"</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="cyber-text-cyan">statutSysteme:</span>{' '}
                      <span className="cyber-text-pink animate-pulse">"🔴 EN LIGNE - Prêt pour les nouvelles missions neurales"</span>
                    </div>
                  </div>

                  <div className="cyber-text-yellow">{'};'}</div>

                  <div className="pt-4 text-gray-500">
                    <TypingText
                      text="// Initier le protocole de contact pour discuter de nouveaux projets cyberpunk et collaborations neurales"
                      speed={35}
                      color="#ff0080"
                    />
                  </div>
                </div>
              </CyberWindow>
            )}
          </>
        )}
      </main>

      {/* Pied de page */}
      <footer className="relative z-10 text-center py-8 mt-16 border-t border-cyan-400/30 bg-black/20 backdrop-blur-sm">
        <div className="text-gray-500">
          <TypingText
            text="© 2077 Raphaël Munoz - Protocole de Formation Neurale BTS SIO SLAM 2 - Académie Cybernétique Robert Schuman 🚀"
            speed={50}
            color="#00f5ff"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;