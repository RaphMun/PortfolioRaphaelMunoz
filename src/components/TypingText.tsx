import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  color?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  speed = 50, 
  className = '', 
  onComplete,
  color = '#fcee09'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span 
      className={`${className} terminal-cursor font-mono`}
      style={{ color }}
    >
      {displayedText}
    </span>
  );
};

export default TypingText;