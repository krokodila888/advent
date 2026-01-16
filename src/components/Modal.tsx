import { X } from 'lucide-react';

interface ModalProps {
  windowNumber: number;
  message: string;
  onClose: () => void;
  onCancel?: () => void;
  onConfitm?: () => void;
}

export function Modal({ windowNumber, message, onClose }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-paper">
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          {windowNumber !== -1 && <h2 className="modal-title">День {windowNumber}</h2>}
          <div className="modal-message" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </div>
  );
}
