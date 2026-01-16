import { useState, useEffect } from 'react';
import { UserIdentification } from './components/UserIdentification';
import { Background } from './components/Background';
import { Calendar } from './components/Calendar';
import { AudioControls } from './components/AudioControls';
import { Snowfall } from './components/Snowfall';
import './App.css';

const getInitialDate = () => {
  const localDate = new Date();
  // Прибавляем 3 часа для московского времени
  //localDate.setHours(localDate.getHours() + 3);
  return localDate;
};

export default function App() {
  const [userName, setUserName] = useState<string | null>(() => {
    const savedName = localStorage.getItem('adventCalendarUser');
    if (savedName === 'Tanya' || savedName === 'Zebra') {
      return savedName;
    }
    localStorage.clear();
    return null;
  });

  const [currentDate, setCurrentDate] = useState<Date>(getInitialDate);

  const handleUserSelect = (name: string) => {
    localStorage.clear();
    setUserName(name);
    localStorage.setItem('adventCalendarUser', name);
  };

  useEffect(() => {
    // Асинхронно обновляем дату с API
    const fetchCurrentDate = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const data = await response.json();
        const moscowDate = new Date(data.datetime); // Это уже московское время!

        // Вычитаем год для тестирования
        /*const testDate = new Date(moscowDate);
    testDate.setFullYear(testDate.getFullYear() - 1);*/

        setCurrentDate(moscowDate);
      } catch (error) {
        console.error('Failed to fetch current date:', error);
        const localDate = new Date(); // Локальное время
        //localDate.setFullYear(localDate.getFullYear() - 1);
        setCurrentDate(localDate);
      }
    };

    fetchCurrentDate();
  }, []);

  return (
    <div className="app-container">
      <Background />
      <Snowfall />
      <AudioControls />

      <div className="content-wrapper">
        <UserIdentification userName={userName} onUserSelect={handleUserSelect} />

        <Calendar currentDate={currentDate} userName={userName} />
      </div>
    </div>
  );
}
