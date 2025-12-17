import { useState, useEffect } from "react";
import { UserIdentification } from "./components/UserIdentification";
import { Background } from "./components/Background";
import { Calendar } from "./components/Calendar";
import { AudioControls } from "./components/AudioControls";
import { Snowfall } from "./components/Snowfall";
import "./App.css";

export default function App() {
  const [userName, setUserName] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState<Date | null>(
    null,
  );

  useEffect(() => {
    // Load user name from localStorage
    const savedName = localStorage.getItem(
      "adventCalendarUser",
    );
    if (savedName) {
      setUserName(savedName);
    }

    // Fetch current date from API
    fetchCurrentDate();
  }, []);

  const fetchCurrentDate = async () => {
    try {
      const response = await fetch(
        "https://worldtimeapi.org/api/ip",
      );
      const data = await response.json();
      const originalDate = new Date(data.datetime);

      // Прибавляем 3 часа для московского времени (UTC+3)
      const moscowDate = new Date(originalDate);
      moscowDate.setHours(moscowDate.getHours() + 3);

      // Вычитаем год для тестирования
      const testDate = new Date(moscowDate);
      testDate.setFullYear(testDate.getFullYear() - 1);
      console.log(testDate);

      setCurrentDate(testDate);
    } catch (error) {
      console.error(
        "Failed to fetch current date, using local time:",
        error,
      );
      const localDate = new Date();

      // Прибавляем 3 часа для московского времени
      localDate.setHours(localDate.getHours() + 3);

      // Вычитаем год для тестирования
      localDate.setFullYear(localDate.getFullYear() - 1);

      setCurrentDate(localDate);
    }
  };

  const handleUserSelect = (name: string) => {
    setUserName(name);
    localStorage.setItem("adventCalendarUser", name);
  };

  return (
    <div className="app-container">
      <Background />
      <Snowfall />
      <AudioControls />

      <div className="content-wrapper">
        <UserIdentification
          userName={userName}
          onUserSelect={handleUserSelect}
        />

        {currentDate && (
          <Calendar
            currentDate={currentDate}
            userName={userName}
          />
        )}
      </div>
    </div>
  );
}