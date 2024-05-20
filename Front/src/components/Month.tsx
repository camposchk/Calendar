import React from 'react';
import style from './Month.module.css';

const Month: React.FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={style["calendar"]}>
      <div className={style["calendar-header"]}>
        <button>Prev</button>
        <span>{today.toLocaleString('default', { month: 'long' })} {currentYear}</span>
        <button>Next</button>
      </div>
      <div className={style["calendar-grid"]}>
        {[].map(day => (
          <div className={style["calendar-cell calendar-cell-header"]} key={day}>{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div className={style["calendar-cell"]} key={`empty-${index}`}></div>
        ))}
        {daysArray.map(day => (
          <div
            className={`${style['calendar-cell']} ${day === today.getDate() ? style['calendar-cell-today'] : ''}`}
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
