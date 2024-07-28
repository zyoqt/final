import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './ShakerTable.module.css';

const ShakerTable = () => {
  const fileInputRef = useRef(null);
  const history = useHistory();

  const handleSimulateClick = () => {
    history.push('/output');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File uploaded:', file.name);
      history.push('/output');
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.shakerTablePage}>
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
        <h1>SHAKER-TABLE</h1>
        <div className={styles.buttonContainer}>
          <button className={styles.actionButton} onClick={handleSimulateClick}>Simulate</button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <button className={styles.actionButton} onClick={handleUploadClick}>Upload Data</button>
        </div>
      </div>
    </div>
  );
};

export default ShakerTable;
