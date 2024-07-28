import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import eqmap from '../eqmap.png'; 

function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>SeismoHistory</h1>
        <nav>
          <Link to="/top-10-earthquakes">
            <button className={styles.navButton}>Top 10 Strongest Earthquakes</button>
          </Link>
          <Link to="/casualties">
            <button className={styles.navButton}>Casualties</button>
          </Link>
          <Link to="/shaker-table">
            <button className={styles.navButton}>Shaker Table</button>
          </Link>
        </nav>
      </header>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>
            <h1>WHAT IS EARTHQUAKE?</h1>
          </div>
          <p>
            An earthquake is a weak to violent shaking of the ground produced by the sudden movement of rock materials below the earth’s surface.
            The earthquakes originate in tectonic plate boundary. The focus is point inside the earth where the earthquake started, sometimes called the hypocenter,
            and the point on the surface of the earth directly above the focus is called the epicenter. 
          </p>
        </div>
        <div className={styles.mapContainer}>
          <img src={eqmap} alt="Map of the Philippines" className={styles.mapImage} />
        </div>
      </div>
    </div>
  );
}

export default Home;
