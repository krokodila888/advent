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

                      <p className="selection-prompt" style={{margin: '0'}}>
                        Привет! Это Женя, и вот мой адвент. </p>
                      <p className="selection-prompt" style={{margin: '0'}}> Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. </p>
                      <p className="selection-prompt" style={{margin: '0'}}>Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!</p>
                      <p className="selection-prompt" style={{margin: '0'}}>(это "да, но не очень внимательно" 👀). </p>
                      <p className="selection-prompt" style={{margin: '0'}}>Он будет меняться по ходу дела, глючить и падать.</p>
                      
      <p className="selection-prompt">Но кто здесь?</p>
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