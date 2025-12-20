import { useState } from 'react';
import { ConfirmModal } from './ConfirmModal';
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
    window.location.reload();
  };

  const handleCancelClick = () => {
    clearOpenedWindows();
    setShowChangeModal(false);
  };

  const handleClose = () => {
    setShowChangeModal(false);
  };

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
          <ConfirmModal
            displayName={displayName}
            onConfirm={handleConfirmChange}
            onCancel={handleCancelClick}
            onClose={handleClose}
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