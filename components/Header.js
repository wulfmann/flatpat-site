import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

export default function() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const theme = menuOpen ? styles.dark : styles.light;

  return (
    <div className={styles.nav}>

      <Link href="/">
        <a>
          <div className={[styles.title, theme].join(' ')}>FLAT PAT</div>
        </a>
      </Link>

      <div className={styles.menu} onClick={e=>setMenuOpen(!menuOpen)}>MENU</div>
      
      {menuOpen && (
        <div className={styles.mobileMenu}>
              <div className={styles.mobileIcon} onClick={e=>setMenuOpen(!menuOpen)}>CLOSE</div>
         <div className={styles.mobileLinks}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/guide">
              <a>Guide</a>
            </Link>
            <Link href="/map">
              <a>Map</a>
            </Link>
            <a href="https://instagram.com/imflatpat">Instagram</a>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
            <Link href="/submit">
              <a>Submit</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}