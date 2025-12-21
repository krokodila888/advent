import { X } from 'lucide-react';

interface ConfirmModalProps {
  displayName: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

export function ConfirmModal({ displayName, onConfirm, onCancel, onClose }: ConfirmModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-paper">
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '10px 0' }}>
              Есть ли сомнение, что ты <strong>{displayName}?</strong>
            </p>
            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
              <button 
                onClick={onConfirm}
                style={{ 
                  padding: '12px 20px', 
                  background: '#d35400', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1em', 
                  cursor: 'pointer', 
                  fontWeight: '500',
                  maxWidth: '240px',
                  alignSelf: 'center'
                }}
              >
                Я передумала. Я не {displayName}
              </button>
              <button 
                onClick={onCancel}
                style={{ 
                  padding: '12px 20px', 
                  background: '#ecf0f1', 
                  color: '#333', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '1em', 
                  cursor: 'pointer', 
                  fontWeight: '500', 
                  maxWidth: '240px',
                  alignSelf: 'center'
                }}
              >
                Никакого!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}