import React from 'react';
import { Minus, Square, X, Zap } from 'lucide-react';

interface CyberWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'yellow' | 'pink' | 'purple';
}

const CyberWindow: React.FC<CyberWindowProps> = ({ 
  title, 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const borderClass = {
    default: 'cyber-border',
    yellow: 'cyber-border-yellow',
    pink: 'cyber-border-pink',
    purple: 'border-2 border-purple-500'
  }[variant];

  const accentColor = {
    default: '#00f5ff',
    yellow: '#fcee09',
    pink: '#ff0080',
    purple: '#b300ff'
  }[variant];

  return (
    <div className={`cyber-window ${borderClass} ${className}`}>
      {/* Header */}
      <div 
        className="px-6 py-3 flex items-center justify-between border-b"
        style={{ borderColor: accentColor + '40' }}
      >
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
          </div>
          <Zap className="w-4 h-4" style={{ color: accentColor }} />
        </div>
        
        <div 
          className="text-sm font-bold font-mono uppercase tracking-wider"
          style={{ color: accentColor }}
        >
          {title}
        </div>
        
        <div className="flex items-center space-x-2">
          <Minus className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Square className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <X className="w-4 h-4 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        {children}
      </div>
    </div>
  );
};

export default CyberWindow;