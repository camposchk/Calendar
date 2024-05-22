import React, { useState, useEffect } from 'react';
import style from './Month.module.css';

const Month = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [daysArray, setDaysArray] = useState<number[]>([]);
  const [firstDayOfMonth, setFirstDayOfMonth] = useState<number>(new Date(currentYear, currentMonth, 1).getDay());

  useEffect(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    setDaysArray(days);
    setFirstDayOfMonth(firstDay);
  }, [currentMonth, currentYear]);

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      setCurrentMonth(newDate.getMonth());
      setCurrentYear(newDate.getFullYear());
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      setCurrentMonth(newDate.getMonth());
      setCurrentYear(newDate.getFullYear());
      return newDate;
    });
  };

  return (
    <div className={style["calendar"]}>
      <div className={style["calendar-header"]}>
        <button onClick={handlePrevMonth}>Prev</button>
        <span>{currentDate.toLocaleString('default', { month: 'long' })} {currentYear}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className={style["calendar-grid"]}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div className={style["calendar-cell calendar-cell-header"]} key={day}>{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div className={style["calendar-cell"]} key={`empty-${index}`}></div>
        ))}
        {daysArray.map(day => (
          <div
            className={`${style['calendar-cell']} ${day === currentDate.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? style['calendar-cell-today'] : ''}`}
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Month;


