import React, { useState, useEffect } from 'react';
import { Terminal, User, Briefcase, Mail, Phone, ExternalLink, Github } from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';
import TypingText from './components/TypingText';
import CodeWindow from './components/CodeWindow';
import GameStats from './components/GameStats';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'about', label: 'rafael.about()', icon: User },
    { id: 'projects', label: 'rafael.projects()', icon: Briefcase },
    { id: 'contact', label: 'rafael.contact()', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono relative overflow-hidden">
      <MatrixBackground />
      
      {/* Header Terminal */}
      <header className="relative z-10 p-6 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Terminal className="w-8 h-8 text-green-400" />
            <div className="text-xl font-bold glitch-effect">
              <TypingText text="rafael@portfolio:~$" className="text-green-400" />
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-800 ${
                  currentSection === index ? 'bg-gray-800 neon-border' : 'border border-gray-600'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span>{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto p-6 mt-8">
        {showContent && (
          <>
            {/* About Section */}
            {currentSection === 0 && (
              <div className="space-y-8">
                <CodeWindow title="developer_profile.js" className="mb-8">
                  <div className="space-y-4">
                    <div className="text-gray-400">
                      <span className="text-blue-400">const</span>{' '}
                      <span className="text-yellow-300">developer</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-red-400">{'{'}</span>
                    </div>
                    
                    <div className="pl-4 space-y-2">
                      <div>
                        <span className="text-green-300">name:</span>{' '}
                        <span className="text-orange-300">"Raphaël Munoz"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-300">status:</span>{' '}
                        <span className="text-orange-300">"Étudiant BTS SIO SLAM 2"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-300">school:</span>{' '}
                        <span className="text-orange-300">"Lycée Robert Schuman"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-300">speciality:</span>{' '}
                        <span className="text-orange-300">"PHP, Java & Web Development"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-300">passion:</span>{' '}
                        <span className="text-orange-300">"Gaming & Code"</span><span className="text-white">,</span>
                      </div>
                      <div>
                        <span className="text-green-300">level:</span>{' '}
                        <span className="text-cyan-300">BTS SLAM 2</span>
                      </div>
                    </div>
                    
                    <div className="text-red-400">{'};'}</div>
                    
                    <div className="pt-4 text-gray-500">
                      <TypingText 
                        text="// Étudiant passionné par le développement et l'univers du gaming"
                        speed={30}
                      />
                    </div>
                  </div>
                </CodeWindow>

                {/* Parcours Section */}
                <CodeWindow title="parcours.js" className="mb-8">
                  <div className="space-y-4">
                    <div className="text-gray-400">
                      <span className="text-blue-400">const</span>{' '}
                      <span className="text-yellow-300">parcours</span>{' '}
                      <span className="text-white">=</span>{' '}
                      <span className="text-red-400">{'['}</span>
                    </div>
                    
                    <div className="pl-4 space-y-4">
                      <div className="bg-gray-800 border border-blue-500 rounded-lg p-4">
                        <div className="text-red-400">{'{'}</div>
                        <div className="pl-4 space-y-1">
                          <div>
                            <span className="text-green-300">period:</span>{' '}
                            <span className="text-orange-300">"2020-2023"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="text-green-300">level:</span>{' '}
                            <span className="text-orange-300">"2nde SN → Terminale"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="text-green-300">result:</span>{' '}
                            <span className="text-green-400">"Bac mention Bien"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="text-green-300">school:</span>{' '}
                            <span className="text-orange-300">"Lycée Robert Schuman"</span>
                          </div>
                        </div>
                        <div className="text-red-400">{'}'}<span className="text-white">,</span></div>
                      </div>
                      
                      <div className="bg-gray-800 border border-green-500 rounded-lg p-4">
                        <div className="text-red-400">{'{'}</div>
                        <div className="pl-4 space-y-1">
                          <div>
                            <span className="text-green-300">period:</span>{' '}
                            <span className="text-orange-300">"2023-2025"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="text-green-300">level:</span>{' '}
                            <span className="text-orange-300">"BTS SIO SLAM"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="text-green-300">year:</span>{' '}
                            <span className="text-cyan-300">"2ème année"</span><span className="text-white">,</span>
                          </div>
                          <div>
                            <span className="text-green-300">school:</span>{' '}
                            <span className="text-orange-300">"Lycée Robert Schuman"</span>
                          </div>
                        </div>
                        <div className="text-red-400">{'}'}</div>
                      </div>
                    </div>
                    
                    <div className="text-red-400">{']; '}</div>
                  </div>
                </CodeWindow>
                <GameStats />
              </div>
            )}

            {/* Projects Section */}
            {currentSection === 1 && (
              <CodeWindow title="projects.json" className="mb-8">
                <div className="space-y-6">
                  <div className="text-gray-400">
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-yellow-300">projects</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-red-400">{'['}</span>
                  </div>
                  
                  <div className="pl-4 space-y-4">
                    {/* Projet Cinéma */}
                    <div className="bg-gray-800 border border-purple-500 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                      <div className="text-red-400">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="text-green-300">name:</span>{' '}
                          <span className="text-orange-300">"Projet Cinéma"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">technology:</span>{' '}
                          <span className="text-orange-300">"PHP"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">type:</span>{' '}
                          <span className="text-orange-300">"Web Application"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">status:</span>{' '}
                          <span className="text-green-400">"Completed"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">description:</span>{' '}
                          <span className="text-orange-300">"Application web complète de gestion de cinéma"</span>
                        </div>
                      </div>
                      <div className="text-red-400">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-purple-600 px-3 py-1 rounded-full text-sm">
                          <span>🎬</span>
                          <span>Cinéma</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm">
                          <span>🐘</span>
                          <span>PHP</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Projet Aéroport */}
                    <div className="bg-gray-800 border border-blue-500 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                      <div className="text-red-400">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="text-green-300">name:</span>{' '}
                          <span className="text-orange-300">"Projet Aéroport"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">technology:</span>{' '}
                          <span className="text-orange-300">"PHP"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">type:</span>{' '}
                          <span className="text-orange-300">"Web Application"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">status:</span>{' '}
                          <span className="text-green-400">"Completed"</span>
                        </div>
                      </div>
                      <div className="text-red-400">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm">
                          <span>✈️</span>
                          <span>Aéroport</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm">
                          <span>🐘</span>
                          <span>PHP</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Projets LPRS */}
                    <div className="bg-gray-800 border border-green-500 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                      <div className="text-red-400">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="text-green-300">name:</span>{' '}
                          <span className="text-orange-300">"Projet LPRS"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">technologies:</span>{' '}
                          <span className="text-orange-300">["PHP", "Java"]</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">type:</span>{' '}
                          <span className="text-orange-300">"Multi-platform"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">status:</span>{' '}
                          <span className="text-green-400">"Completed"</span>
                        </div>
                      </div>
                      <div className="text-red-400">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-green-600 px-3 py-1 rounded-full text-sm">
                          <span>🏫</span>
                          <span>LPRS</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm">
                          <span>🐘</span>
                          <span>PHP</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-sm">
                          <span>☕</span>
                          <span>Java</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Projets Java */}
                    <div className="bg-gray-800 border border-red-500 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                      <div className="text-red-400">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="text-green-300">category:</span>{' '}
                          <span className="text-orange-300">"Projets Java"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">projects:</span>{' '}
                          <span className="text-orange-300">["Pendu", "Sudoku", "Gestion Stock", "ToDoList (JavaFX)"]</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">technology:</span>{' '}
                          <span className="text-orange-300">"Java / JavaFX"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">status:</span>{' '}
                          <span className="text-green-400">"Completed"</span>
                        </div>
                      </div>
                      <div className="text-red-400">{'}'}<span className="text-white">,</span></div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-sm">
                          <span>🎯</span>
                          <span>Pendu</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-sm">
                          <span>🔢</span>
                          <span>Sudoku</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full text-sm">
                          <span>📦</span>
                          <span>Stock</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-orange-600 px-3 py-1 rounded-full text-sm">
                          <span>✅</span>
                          <span>TodoList</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Portfolio */}
                    <div className="bg-gray-800 border border-cyan-500 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                      <div className="text-red-400">{'{'}</div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="text-green-300">name:</span>{' '}
                          <span className="text-orange-300">"Portfolio Gaming"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">technology:</span>{' '}
                          <span className="text-orange-300">"React + TypeScript"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">type:</span>{' '}
                          <span className="text-orange-300">"Web Portfolio"</span><span className="text-white">,</span>
                        </div>
                        <div>
                          <span className="text-green-300">status:</span>{' '}
                          <span className="text-cyan-400">"En cours"</span>
                        </div>
                      </div>
                      <div className="text-red-400">{'}'}</div>
                      
                      <div className="mt-4 flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-cyan-600 px-3 py-1 rounded-full text-sm">
                          <span>🎮</span>
                          <span>Gaming</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-600 px-3 py-1 rounded-full text-sm">
                          <span>⚛️</span>
                          <span>React</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-red-400">{']; '}</div>
                  <div className="text-gray-500">
                    <TypingText 
                      text="// Portfolio de projets réalisés durant ma formation BTS SIO SLAM" 
                      speed={40}
                    />
                  </div>
                </div>
              </CodeWindow>
            )}

            {/* Contact Section */}
            {currentSection === 2 && (
              <CodeWindow title="contact_info.js" className="mb-8">
                <div className="space-y-4">
                  <div className="text-gray-400">
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-yellow-300">contactInfo</span>{' '}
                    <span className="text-white">=</span>{' '}
                    <span className="text-red-400">{'{'}</span>
                  </div>
                  
                  <div className="pl-4 space-y-4">
                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                      <Phone className="w-5 h-5 text-green-400" />
                      <div>
                        <span className="text-green-300">phone:</span>{' '}
                        <a href="tel:0695869618" className="text-orange-300 hover:text-white">
                          "0695869618"
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <div>
                        <span className="text-green-300">email:</span>{' '}
                        <a href="mailto:rafael.munoz@outlook.fr" className="text-orange-300 hover:text-white">
                          "rafael.munoz@outlook.fr"
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                      <Github className="w-5 h-5 text-purple-400" />
                      <div>
                        <span className="text-green-300">github:</span>{' '}
                        <span className="text-orange-300">"github.com/rafael-munoz"</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-green-300">status:</span>{' '}
                      <span className="text-green-400 animate-pulse">"🟢 Disponible pour de nouveaux projets"</span>
                    </div>
                  </div>
                  
                  <div className="text-red-400">{'};'}</div>
                  
                  <div className="pt-4 text-gray-500">
                    <TypingText 
                      text="// N'hésitez pas à me contacter pour discuter de vos projets !" 
                      speed={35}
                    />
                  </div>
                </div>
              </CodeWindow>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 mt-16 border-t border-gray-700">
        <div className="text-gray-500">
          <TypingText 
            text="© 2025 Raphaël Munoz - BTS SIO SLAM 2 - Lycée Robert Schuman 🎮" 
            speed={50}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;