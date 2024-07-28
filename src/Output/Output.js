import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Output.module.css';

const Output = () => {
  return (
    <div className={styles.outputPage}>
      <nav className={styles.navbar}>
        <Link to="/">
          <button className={`${styles.navButton} ${styles.homeButton}`}>Back to Home page</button>
        </Link>
        <div className={styles.navButtonsRight}>
          <Link to="/top-10-earthquakes">
            <button className={styles.navButton}>Top 10 Strongest Earthquakes</button>
          </Link>
          <Link to="/casualties">
            <button className={styles.navButton}>Casualties</button>
          </Link>
        </div>
      </nav>
      <div className={styles.content}>
        <h1>SHAKER-TABLE OUTPUT</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.actionButton}>Graph</button>
        </div>
      </div>
    </div>
  );
};

export default Output;
