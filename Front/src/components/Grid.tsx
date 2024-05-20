import React from 'react';
import styles from './Grid.module.css';

const Grid: React.FC = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className={styles.grid}>
      {hours.map((hour) => (
        days.map((day) => (
          <div
            key={`${day}`}
            className={`${styles.cell} ${day === 0 || day === 6 ? styles.darkCell : ''}`}
            style={{width: 200}}
          >
            
          </div>
        ))
      ))}
    </div>
  );
};

export default Grid;
