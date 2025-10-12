import React from 'react';
import { Zap, Trophy, Target, Code2, Cpu, Database, Gamepad2, Award } from 'lucide-react';

const GameStats: React.FC = () => {
  const stats = [
    { icon: Gamepad2, label: 'Level', value: 'BTS SLAM 2', color: '#fcee09' },
    { icon: Zap, label: 'XP Points', value: '8 Projets', color: '#00f5ff' },
    { icon: Target, label: 'Formation', value: 'Robert Schuman', color: '#ff0080' },
    { icon: Trophy, label: 'Skills', value: 'PHP & Java', color: '#b300ff' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="cyber-stat p-4 text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
        >
          {/* Hologram effect */}
          <div className="absolute inset-0 hologram-effect opacity-20"></div>
          
          <stat.icon 
            className="w-10 h-10 mx-auto mb-3 relative z-10" 
            style={{ 
              color: stat.color,
              filter: `drop-shadow(0 0 8px ${stat.color})`
            }} 
          />
          <div className="text-xs text-gray-400 mb-2 uppercase tracking-wider font-semibold relative z-10">
            {stat.label}
          </div>
          <div 
            className="text-lg font-bold font-mono relative z-10" 
            style={{ 
              color: stat.color,
              textShadow: `0 0 10px ${stat.color}`
            }}
          >
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameStats;