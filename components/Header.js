import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

export default function() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>
          <div className={styles.title}>FLAT PAT</div>
        </a>
      </Link>
      <div className={styles.menu} onClick={e=>setMenuOpen(!menu)}>MENU</div>
      
      {menuOpen && (
        <div>
          menu
        </div>
      )}
    </div>
  )
}