import React, { useEffect, useState } from 'react';

const MatrixBackground: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>{}[];()';
    const columnCount = Math.floor(window.innerWidth / 20);
    
    const generateColumn = () => {
      let column = '';
      for (let i = 0; i < 50; i++) {
        column += chars[Math.floor(Math.random() * chars.length)] + '\n';
      }
      return column;
    };

    const newColumns = Array.from({ length: columnCount }, generateColumn);
    setColumns(newColumns);

    const interval = setInterval(() => {
      setColumns(prev => prev.map(() => generateColumn()));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix-bg">
      {columns.map((column, index) => (
        <div
          key={index}
          className="matrix-column"
          style={{
            left: `${index * 20}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {column}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;