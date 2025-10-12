import React, { useState, useEffect } from 'react';
import { Terminal, User, Briefcase, Mail, Phone, Github, Cpu, Zap, Shield } from 'lucide-react';
import CyberBackground from './components/CyberBackground';
import TypingText from './components/TypingText';
import CyberWindow from './components/CyberWindow';
import GameStats from './components/GameStats';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'about', label: 'rafael.exe --info', icon: User },
    { id: 'projects', label: 'rafael.exe --projects', icon: Briefcase },
    { id: 'contact', label: 'rafael.exe --contact', icon: Mail }
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
                text="RAFAEL.EXE INITIALIZED" 
                className="glitch-text" 
                data-text="RAFAEL.EXE INITIALIZED"
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
                <CyberWindow title="NEURAL_PROFILE.JS" variant="yellow" className="mb-8">
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <span className="cyber-text-cyan">const</span>{' '}
                      <span className="cyber-text-yellow">cyberDeveloper</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="cyber-text-pink">{'{'}</span>
                    </div>
                    
                    <div className="pl-4 space-y-2">
                      <div>
                        <span className="cyber-text-cyan">name:</span>{' '}
                        <span className="cyber-text-yellow">"Raphaël Munoz"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">status:</span>{' '}
                        <span className="cyber-text-yellow">"Cyber Student BTS SIO SLAM 2"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">academy:</span>{' '}
                        <span className="cyber-text-yellow">"Lycée Robert Schuman"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">specialization:</span>{' '}
                        <span className="cyber-text-yellow">"Neural Networks: PHP, Java & Web"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">passion:</span>{' '}
                        <span className="cyber-text-yellow">"Cyberpunk Gaming & Code Matrix"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="cyber-text-cyan">currentLevel:</span>{' '}
                        <span className="cyber-text-pink">BTS_SLAM_2.exe</span>
                      </div>
                    </div>
                    
                    <div className="cyber-text-pink">{'};'}</div>
                    
                    <div className="pt-4 text-gray-500">
                      <TypingText 
                        text="// Neural pathways optimized for development and cyberpunk gaming universe"
                        speed={30}
                        color="#00f5ff"
                      />
                    </div>
                  </div>
                </CyberWindow>

                {/* Parcours Section */}
                <CyberWindow title="TIMELINE.NEURAL" variant="pink" className="mb-8">
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <span className="cyber-text-cyan">const</span>{' '}
                      <span className="cyber-text-pink">cyberTimeline</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="cyber-text-yellow">{'['}</span>
                    </div>
                    
                    <div className="pl-4 space-y-4">
                      <div className="cyber-card p-4 cyber-border">
                        <div className="cyber-text-yellow">{'{'}</div>
                        <div className="pl-4 space-y-1">
                          <div>
                            <span className="cyber-text-cyan">period:</span>{' '}
                            <span className="cyber-text-yellow">"2020-2023"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">phase:</span>{' '}
                            <span className="cyber-text-yellow">"2nde SN → Terminale"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">achievement:</span>{' '}
                            <span className="cyber-text-pink">"Bac mention Bien"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">academy:</span>{' '}
                            <span className="cyber-text-yellow">"Lycée Robert Schuman"</span>
                          </div>
                        </div>
                        <div className="cyber-text-yellow">{'}'}<span className="text-white">,</span></div>
                      </div>
                      
                      <div className="cyber-card p-4 cyber-border-pink">
                        <div className="cyber-text-yellow">{'{'}</div>
                        <div className="pl-4 space-y-1">
                          <div>
                            <span className="cyber-text-cyan">period:</span>{' '}
                            <span className="cyber-text-yellow">"2023-2025"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">program:</span>{' '}
                            <span className="cyber-text-yellow">"BTS SIO SLAM Neural Training"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">currentPhase:</span>{' '}
                            <span className="cyber-text-pink">"Level 2 - Advanced Training"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="cyber-text-cyan">academy:</span>{' '}
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

            {/* Projects Section */}
            {currentSection === 1 && (
              <CyberWindow title="PROJECT_DATABASE.NEURAL" variant="purple" className="mb-8">
                <div className="space-y-6">
                  <div className="text-gray-300">
                    <span className="cyber-text-cyan">const</span>{' '}
                    <span className="cyber-text-purple">cyberProjects</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="cyber-text-yellow">{'['}</span>
                  </div>
                  
                  <div className="pl-4 space-y-4">
                    {/* Projet Cinéma */}
                    <div className="cyber-card p-4 transform hover:scale-105 transition-all duration-300">
                      <div className="cyber-text-yellow">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="cyber-text-cyan">projectName:</span>{' '}
                          <span className="cyber-text-yellow">"Cinema Neural Network"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">coreLanguage:</span>{' '}
                          <span className="cyber-text-yellow">"PHP.exe"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">systemType:</span>{' '}
                          <span className="cyber-text-yellow">"Web Neural Interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">status:</span>{' '}
                          <span className="cyber-text-pink">"MISSION_COMPLETE"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">description:</span>{' '}
                          <span className="cyber-text-yellow">"Complete cinema management neural system"</span>
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
                          <span className="cyber-text-cyan">projectName:</span>{' '}
                          <span className="cyber-text-yellow">"Airport Control System"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">coreLanguage:</span>{' '}
                          <span className="cyber-text-yellow">"PHP.exe"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">systemType:</span>{' '}
                          <span className="cyber-text-yellow">"Flight Management Interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">status:</span>{' '}
                          <span className="cyber-text-pink">"MISSION_COMPLETE"</span>
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
                          <span className="cyber-text-cyan">projectName:</span>{' '}
                          <span className="cyber-text-yellow">"LPRS Neural Systems"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">coreLanguages:</span>{' '}
                          <span className="cyber-text-yellow">["PHP.exe", "Java.neural"]</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">systemType:</span>{' '}
                          <span className="cyber-text-yellow">"Multi-Platform Interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">status:</span>{' '}
                          <span className="cyber-text-pink">"MISSION_COMPLETE"</span>
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
                          <span className="cyber-text-cyan">category:</span>{' '}
                          <span className="cyber-text-yellow">"Java Neural Collection"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">neuralPrograms:</span>{' '}
                          <span className="cyber-text-yellow">["Pendu.java", "Sudoku.neural", "StockManager.exe", "ToDoList.fx"]</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">coreLanguage:</span>{' '}
                          <span className="cyber-text-yellow">"Java.neural / JavaFX.interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">status:</span>{' '}
                          <span className="cyber-text-pink">"ALL_MISSIONS_COMPLETE"</span>
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
                          <span className="cyber-text-cyan">projectName:</span>{' '}
                          <span className="cyber-text-yellow">"Cyberpunk Portfolio Interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">coreLanguage:</span>{' '}
                          <span className="cyber-text-yellow">"React.neural + TypeScript.exe"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">systemType:</span>{' '}
                          <span className="cyber-text-yellow">"Neural Web Interface"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="cyber-text-cyan">status:</span>{' '}
                          <span className="cyber-text-cyan">"ACTIVE_DEVELOPMENT"</span>
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
                      text="// Neural project database compiled during BTS SIO SLAM training protocol" 
                      speed={40}
                      color="#b300ff"
                    />
                  </div>
                </div>
              </CyberWindow>
            )}

            {/* Contact Section */}
            {currentSection === 2 && (
              <CyberWindow title="CONTACT_PROTOCOL.NEURAL" variant="default" className="mb-8">
                <div className="space-y-4">
                  <div className="text-gray-300">
                    <span className="cyber-text-cyan">const</span>{' '}
                    <span className="cyber-text-cyan">neuralContactProtocol</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="cyber-text-yellow">{'{'}</span>
                  </div>
                  
                  <div className="pl-4 space-y-4">
                    <div className="flex items-center space-x-4 group cursor-pointer hover:cyber-bg-cyan p-3 rounded-lg transition-all duration-300 cyber-card">
                      <Phone className="w-5 h-5 cyber-text-cyan" />
                      <div>
                        <span className="cyber-text-cyan">neuralPhone:</span>{' '}
                        <a href="tel:0695869618" className="cyber-text-yellow hover:text-white">
                          "0695869618"
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer hover:cyber-bg-yellow p-3 rounded-lg transition-all duration-300 cyber-card">
                      <Mail className="w-5 h-5 cyber-text-yellow" />
                      <div>
                        <span className="cyber-text-cyan">neuralEmail:</span>{' '}
                        <a href="mailto:rafael.munoz@outlook.fr" className="cyber-text-yellow hover:text-white">
                          "rafael.munoz@outlook.fr"
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer hover:cyber-bg-pink p-3 rounded-lg transition-all duration-300 cyber-card">
                      <Github className="w-5 h-5 cyber-text-pink" />
                      <div>
                        <span className="cyber-text-cyan">neuralRepository:</span>{' '}
                        <span className="cyber-text-yellow">"github.com/rafael-munoz"</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="cyber-text-cyan">systemStatus:</span>{' '}
                      <span className="cyber-text-pink animate-pulse">"🔴 ONLINE - Ready for new neural missions"</span>
                    </div>
                  </div>
                  
                  <div className="cyber-text-yellow">{'};'}</div>
                  
                  <div className="pt-4 text-gray-500">
                    <TypingText 
                      text="// Initiate contact protocol to discuss new cyberpunk projects and neural collaborations" 
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

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 mt-16 border-t border-cyan-400/30 bg-black/20 backdrop-blur-sm">
        <div className="text-gray-500">
          <TypingText 
            text="© 2077 Raphaël Munoz - Neural Training Protocol BTS SIO SLAM 2 - Cyber Academy Robert Schuman 🚀" 
            speed={50}
            color="#00f5ff"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;