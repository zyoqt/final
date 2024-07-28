import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Top10Earthquakes.module.css';

const Top10Earthquakes = () => {
  return (
    <div className={`${styles.pageContainer} ${styles.topEarthquakesPage}`}>
      <header className={styles.header}>
        <div className={styles.navButtonsLeft}>
          <Link to="/">
            <button className={`${styles.button} ${styles.homeButton}`}>Back to Home page</button>
          </Link>
        </div>
        <div className={styles.navButtonsRight}>
          <Link to="/casualties">
            <button className={`${styles.button} ${styles.navButton}`}>Casualties</button>
          </Link>
          <Link to="/shaker-table">
            <button className={`${styles.button} ${styles.navButton}`}>Shaker Table</button>
          </Link>
        </div>
      </header>
      <div className={styles.content}>
        <h1>TOP 10 STRONGEST EARTHQUAKES</h1>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>DATE</th>
                <th>LOCATION</th>
                <th>MAGNITUDE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>May 22, 1960</td>
                <td>Chile</td>
                <td>9.5</td>
              </tr>
              <tr>
                <td>March 28, 1964</td>
                <td>Kamchatka</td>
                <td>9.2</td>
              </tr>
              <tr>
                <td>December 26, 2004</td>
                <td>West coast Sumatra</td>
                <td>9.1</td>
              </tr>
              <tr>
                <td>March 11, 2011</td>
                <td>East coast of Japan</td>
                <td>9.0</td>
              </tr>
              <tr>
                <td>November 4, 1952</td>
                <td>Soviet Union</td>
                <td>9.0</td>
              </tr>
              <tr>
                <td>August 13, 1868</td>
                <td>Arica, Peru</td>
                <td>9.0</td>
              </tr>
              <tr>
                <td>January 26, 1700</td>
                <td>North America</td>
                <td>9.0</td>
              </tr>
              <tr>
                <td>February 27, 2010</td>
                <td>Bio-Bio, Chile</td>
                <td>8.8</td>
              </tr>
              <tr>
                <td>January 13, 1906</td>
                <td>Coast of Ecuador</td>
                <td>8.8</td>
              </tr>
              <tr>
                <td>November 1, 1755</td>
                <td>Lisbon</td>
                <td>8.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Top10Earthquakes;
