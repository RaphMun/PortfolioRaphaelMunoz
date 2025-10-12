import React from 'react';
import { Minimize2, Maximize2, X } from 'lucide-react';

interface CodeWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const CodeWindow: React.FC<CodeWindowProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`code-window ${className}`}>
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm font-mono">{title}</div>
        <div className="flex items-center space-x-2">
          <Minimize2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          <Maximize2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          <X className="w-4 h-4 text-gray-400 hover:text-red-400 cursor-pointer" />
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default CodeWindow;