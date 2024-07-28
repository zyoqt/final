import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Casualties.module.css';

const Casualties = () => {
  return (
    <div className={styles.casualtiesPage}>
      <nav className={styles.navbar}>
        <Link to="/">
          <button className={`${styles.navButton} ${styles.homeButton}`}>Back to Home page</button>
        </Link>
        <div className={styles.navButtonsRight}>
          <Link to="/top-10-earthquakes">
            <button className={styles.navButton}>Top 10 Strongest Earthquakes</button>
          </Link>
          <Link to="/shaker-table">
            <button className={styles.navButton}>Shaker Table</button>
          </Link>
        </div>
      </nav>
      <div className={styles.content}>
        <h1>Casualties</h1>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>No. of Injured</th>
                <th>No. of Deaths</th>
                <th>Cost of Casualties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>May 22, 1960</td>
                <td>Chile</td>
                <td>3000</td>
                <td>Approx. 1,655</td>
                <td>$550 million</td>
              </tr>
              <tr>
                <td>March 28, 1964</td>
                <td>Kamchatka</td>
                <td>50</td>
                <td>131</td>
                <td>$1 billion</td>
              </tr>
              <tr>
                <td>December 26, 2004</td>
                <td>West coast Sumatra</td>
                <td>---</td>
                <td>Approx. 230,000</td>
                <td>$10 million</td>
              </tr>
              <tr>
                <td>March 11, 2011</td>
                <td>East coast of Japan</td>
                <td>4100</td>
                <td>19,300</td>
                <td>$235 billion</td>
              </tr>
              <tr>
                <td>November 4, 1952</td>
                <td>Soviet Union</td>
                <td>---</td>
                <td>15,000</td>
                <td>$17 million</td>
              </tr>
              <tr>
                <td>August 13, 1868</td>
                <td>Arica, Peru</td>
                <td>---</td>
                <td>---</td>
                <td>$25 million</td>
              </tr>
              <tr>
                <td>January 26, 1700</td>
                <td>North America</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>February 27, 2010</td>
                <td>Bio-Bio, Chile</td>
                <td>150</td>
                <td>528</td>
                <td>$550 million</td>
              </tr>
              <tr>
                <td>January 13, 1906</td>
                <td>Coast of Ecuador</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
              <tr>
                <td>November 1, 1755</td>
                <td>Lisbon</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Casualties;
