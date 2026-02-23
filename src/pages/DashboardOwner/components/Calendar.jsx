import { useEffect, useState } from "react";

/**
 * Calendar
 * - Mostra o mês/ano atual
 * - Sublinha automaticamente o dia de hoje
 * - Atualiza sozinho à meia-noite
 */
export default function Calendar({ onSelectDay }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // ⏰ Atualizar automaticamente à meia-noite
  useEffect(() => {
    const now = new Date();

    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );

    const timeout = setTimeout(() => {
      setToday(new Date());
    }, nextMidnight - now);

    return () => clearTimeout(timeout);
  }, [today]);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;

  return (
    <section className="calendar">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>‹</button>

        <strong>
          {currentDate.toLocaleDateString("pt-PT", {
            month: "long",
            year: "numeric",
          })}
        </strong>

        <button onClick={goToNextMonth}>›</button>
      </div>

      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;

          const isToday =
            isCurrentMonth && day === today.getDate();

          return (
            <div
              key={day}
              className={`calendar-cell ${isToday ? "today" : ""}`}
              onClick={() => onSelectDay(day, currentDate)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </section>
  );
}