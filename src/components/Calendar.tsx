import { useState, useEffect } from 'react';
import { CalendarWindow } from './CalendarWindow';
import { Modal } from './Modal';
import { getWindowDate, isWindowActive, isExactDateMatch } from '../utils/dateUtils';
import { getOpenedWindows, markWindowAsOpened } from '../utils/localStorage';
import { windowMessages } from '../data/data';

interface CalendarProps {
  currentDate: Date;
  userName: string | null;
}

export function Calendar({ currentDate, userName }: CalendarProps) {
  const [openedWindows, setOpenedWindows] = useState<Set<number>>(new Set());
  const [selectedWindow, setSelectedWindow] = useState<number | null>(null);

  useEffect(() => {
    const opened = getOpenedWindows();
    window.requestAnimationFrame(() => setOpenedWindows(opened));
  }, []);

  const handleWindowClick = (windowNumber: number) => {
    const windowDate = getWindowDate(windowNumber);
    if (isWindowActive(windowDate, currentDate)) {
      setSelectedWindow(windowNumber);
      if (!openedWindows.has(windowNumber)) {
        const newOpened = markWindowAsOpened(windowNumber);
        setOpenedWindows(newOpened);
      }
    }
  };

  const closeModal = () => {
    setSelectedWindow(null);
  };

  // Sort windows: unopened first, then opened
  const windowNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const sortedWindows = [...windowNumbers].sort((a, b) => {
    const aOpened = openedWindows.has(a);
    const bOpened = openedWindows.has(b);
    if (aOpened === bOpened) return a - b;
    return aOpened ? 1 : -1;
  });

  return (
    <>
      <div className="calendar-grid">
        {sortedWindows.map((windowNumber) => {
          const windowDate = getWindowDate(windowNumber);
          const isActive = isWindowActive(windowDate, currentDate);
          const isOpened = openedWindows.has(windowNumber);
          const isExactMatch = isExactDateMatch(windowDate, currentDate);
          
          return (
            <CalendarWindow
              key={windowNumber}
              windowNumber={windowNumber}
              isActive={isActive}
              isOpened={isOpened}
              isExactMatch={isExactMatch}
              onClick={() => handleWindowClick(windowNumber)}
            />
          );
        })}
      </div>

      {selectedWindow !== null && (() => {
        const data = windowMessages[selectedWindow - 1];
        const message = userName === 'Tanya' ? data.tanya_message : userName === 'Zebra' ? data.zebra_message : '<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>';
        return (
          <Modal
            windowNumber={selectedWindow}
            message={message}
            onClose={closeModal}
          />
        );
      })()}
    </>
  );
}
