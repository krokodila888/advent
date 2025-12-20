import { useState, useEffect } from "react";
import { UserIdentification } from "./components/UserIdentification";
import { Background } from "./components/Background";
import { Calendar } from "./components/Calendar";
import { AudioControls } from "./components/AudioControls";
import { Snowfall } from "./components/Snowfall";
import "./App.css";

const getInitialDate = () => {
  const localDate = new Date();
  // Прибавляем 3 часа для московского времени
  localDate.setHours(localDate.getHours() + 3);
  // Вычитаем год для тестирования
  localDate.setFullYear(localDate.getFullYear() - 1);
  return localDate;
};

export default function App() {
  const [userName, setUserName] = useState<string | null>(() => {
    const savedName = localStorage.getItem("adventCalendarUser");
    if (savedName === 'Tanya' || savedName === 'Zebra') {
      return savedName;
    }
    localStorage.clear();
    return null;
  });

  const [currentDate, setCurrentDate] = useState<Date>(getInitialDate);

  const handleUserSelect = (name: string) => {
    setUserName(name);
    localStorage.setItem("adventCalendarUser", name);
  };

  useEffect(() => {
    // Асинхронно обновляем дату с API
    const fetchCurrentDate = async () => {
      try {
        const response = await fetch(
          "https://worldtimeapi.org/api/ip",
        );
        const data = await response.json();
        const originalDate = new Date(data.datetime);

        const moscowDate = new Date(originalDate);
        moscowDate.setHours(moscowDate.getHours() + 3);

        const testDate = new Date(moscowDate);
        testDate.setFullYear(testDate.getFullYear() - 1);
        console.log(testDate);

        setCurrentDate(testDate);
      } catch (error) {
        console.error(
          "Failed to fetch current date, using local time:",
          error,
        );
        // При ошибке оставляем локальное время, которое уже установлено
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
        {!userName && (
          <div className="welcome-message">
            <p>
              Привет! 👋 Это Женя, и вот мой адвент. Я писала его с четырьмя нейронками на бегу 🏃‍♀️💨, 
              и тексты порой всратые - но в этом есть свое очарование ✨. Вычитывала ли я их? 
              Ну вот еще, вы вообще представляете мой график?! 😅 (это "да, но не очень внимательно" 👀). 
              Он будет меняться по ходу дела, глючить и падать 🐛💥
            </p>
            <p>
              В общем, с наступающим всяким! 🎄🎁🎉
            </p>
          </div>
        )}

        <UserIdentification
          userName={userName}
          onUserSelect={handleUserSelect} 
        />

        <Calendar
          currentDate={currentDate}
          userName={userName}
        />
      </div>
    </div>
  );
}