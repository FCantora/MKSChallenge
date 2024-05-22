import { useEffect, useState } from 'react';
import styles from './Toggle.module.css'

export const Toggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
    localStorage.setItem('dark-mode', JSON.stringify(isDark));
  }, [isDark]);


  return (
    <div className={styles.container} onClick={() => setIsDark(!isDark)} role="button" aria-pressed={isDark} tabIndex={0}>
      <div className={`${styles.toggle} ${isDark ? styles.dark : ''}`} />
    </div>
  )
}
