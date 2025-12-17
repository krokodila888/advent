import { useState, useEffect } from 'react';

interface UserIdentificationProps {
  userName: string | null;
  onUserSelect: (name: string) => void;
}

const greetings = [
  'Привет',
  'Хорошего дня',
  'Здравствуй',
  'Добро пожаловать',
  'Hey there',
  'Good day',
  'Howdy',
  'Salutations',
  'Hiya',
  'Hey'
];

export function UserIdentification({ userName, onUserSelect }: UserIdentificationProps) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Select random greeting on mount
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    // schedule setState to avoid synchronous setState inside effect
    window.requestAnimationFrame(() => setGreeting(randomGreeting));
  }, []);

  if (userName) {
    return (
      <div className="user-greeting">
        <p className="greeting-text">
          {greeting}, <span className="user-name">{userName === 'Tenya' ? 'Таня' : userName === 'Zebra' ? 'Зёбра' : 'неведомый гость'}</span>!
        </p>
      </div>
    );
  }

  return (
    <div className="user-selection">
      <p className="selection-prompt">I am...</p>
      <div className="user-options">
        <button 
          className="user-button"
          onClick={() => onUserSelect('Tanya')}
        >
          Таня
        </button>
        <button 
          className="user-button"
          onClick={() => onUserSelect('Zebra')}
        >
          Зёбра
        </button>
      </div>
    </div>
  );
}
