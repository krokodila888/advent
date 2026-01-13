import { useState } from 'react';
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
  const [openedWindows, setOpenedWindows] = useState<Set<number>>(() => getOpenedWindows());
  const [selectedWindow, setSelectedWindow] = useState<number | null>(null);

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

  // Sort windows: today's window first, then unopened in chronological order, then opened in chronological order
 // Sort windows: 
// 1. Unopened available windows (chronological)
// 2. Unavailable windows (chronological)
// 3. Today's window (if opened)
// 4. Other opened windows (chronological)
// Sort windows: 
// 1. Unopened available windows (chronological)
// 2. Today's window (if opened) - special position for easy access
// 3. Unavailable windows (chronological)
// 4. Other opened windows (chronological)
const windowNumbers = Array.from({ length: 32 }, (_, i) => i + 1);
const sortedWindows = [...windowNumbers].sort((a, b) => {
  const aDate = getWindowDate(a);
  const bDate = getWindowDate(b);
  const aIsToday = isExactDateMatch(aDate, currentDate);
  const bIsToday = isExactDateMatch(bDate, currentDate);
  const aOpened = openedWindows.has(a);
  const bOpened = openedWindows.has(b);
  const aAvailable = isWindowActive(aDate, currentDate);
  const bAvailable = isWindowActive(bDate, currentDate);

  // Group definitions
  const aIsUnopened = aAvailable && !aOpened;
  const bIsUnopened = bAvailable && !bOpened;
  
  const aIsTodayOpened = aIsToday && aOpened;
  const bIsTodayOpened = bIsToday && bOpened;
  
  const aIsUnavailable = !aAvailable;
  const bIsUnavailable = !bAvailable;
  
  const aIsOtherOpened = aOpened && !aIsToday && aAvailable;
  const bIsOtherOpened = bOpened && !bIsToday && bAvailable;

  // Priority order:
  // 1. Unopened available (including today if unopened)
  if (aIsUnopened && !bIsUnopened) return -1;
  if (!aIsUnopened && bIsUnopened) return 1;
  if (aIsUnopened && bIsUnopened) return a - b;

  // 2. Today's window if opened (before unavailable!)
  if (aIsTodayOpened && !bIsTodayOpened) return -1;
  if (!aIsTodayOpened && bIsTodayOpened) return 1;

  // 3. Unavailable windows
  if (aIsUnavailable && !bIsUnavailable) return -1;
  if (!aIsUnavailable && bIsUnavailable) return 1;
  if (aIsUnavailable && bIsUnavailable) return a - b;

  // 4. Other opened windows
  if (aIsOtherOpened && bIsOtherOpened) return a - b;

  return 0;
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