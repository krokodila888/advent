import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { clearOpenedWindows, clearUserName } from '../utils/localStorage';

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
  const [greeting] = useState(() => 
    greetings[Math.floor(Math.random() * greetings.length)]
  );
  const [showChangeModal, setShowChangeModal] = useState(false);

  const displayName = userName === 'Tanya' ? 'Таня' : userName === 'Zebra' ? 'Зёбра' : 'неведомый гость';

  const handleNameClick = () => {
    setShowChangeModal(true);
  };

  const handleConfirmChange = () => {
    clearUserName();
    clearOpenedWindows();
    setShowChangeModal(false);
    // Перезагрузка страницы, чтобы пользователь мог выбрать заново
    window.location.reload();
  };

  const handleCancelClick1 = () => {
    clearOpenedWindows();
    setShowChangeModal(false);
  };

  const changeModalContent = `
    <div style="text-align: center;">
      <p style="margin: 10px 0;">Есть ли сомнение, что ты <strong>${displayName}?</strong></p>
      <div style="display: flex; gap: 12px; flex-direction: column;">
        <button 
          class="change-confirm-button"
          style="padding: 12px 20px; background: #d35400; color: white; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; font-weight: 500;"
        >
          Я передумала. Я не ${displayName}
        </button>
        <button 
          class="change-cancel-button"
          style="padding: 12px 20px; background: #ecf0f1; color: #333; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; font-weight: 500;"
        >
          Никакого!
        </button>
      </div>
    </div>
  `;

  useEffect(() => {
    if (showChangeModal) {
      const handleConfirmClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('change-confirm-button')) {
          handleConfirmChange();
        }
      };

      const handleCancelClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('change-cancel-button')) {
          handleCancelClick1();
        }
      };

      document.addEventListener('click', handleConfirmClick);
      document.addEventListener('click', handleCancelClick);

      return () => {
        document.removeEventListener('click', handleConfirmClick);
        document.removeEventListener('click', handleCancelClick);
      };
    }
  }, [showChangeModal]);

  if (userName) {
    return (
      <>
        <div className="user-greeting">
          <p className="greeting-text">
            {greeting},{' '}
            <span 
              className="user-name clickable"
              onClick={handleNameClick}
              title={`А точно ли я ${displayName}?..`}
            >
              {displayName}
            </span>!
          </p>
        </div>

        {showChangeModal && (userName === 'Tanya' || userName === 'Zebra') && (
          <Modal
            windowNumber={-1}
            message={changeModalContent}
            onClose={() => setShowChangeModal(false)}
          />
        )}
      </>
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