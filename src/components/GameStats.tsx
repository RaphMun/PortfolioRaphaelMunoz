import React from 'react';
import { Zap, Trophy, Target, Code2 } from 'lucide-react';

const GameStats: React.FC = () => {
  const stats = [
    { icon: Code2, label: 'Level', value: 'BTS SLAM 2', color: '#00ff88' },
    { icon: Zap, label: 'XP Points', value: '8 Projets', color: '#ff6b6b' },
    { icon: Target, label: 'Formation', value: 'Robert Schuman', color: '#4ecdc4' },
    { icon: Trophy, label: 'Skills', value: 'PHP & Java', color: '#ffe66d' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300 hover:border-opacity-80"
          style={{ borderColor: stat.color + '40' }}
        >
          <stat.icon className="w-8 h-8 mx-auto mb-2" style={{ color: stat.color }} />
          <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
          <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default GameStats;