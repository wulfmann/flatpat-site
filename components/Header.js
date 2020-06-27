import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

export default function() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src="/minimal.svg" width="60" alt="logo" />
      </div>
      <Link href="/">
        <a>
          <div className={styles.title}>FLAT PAT</div>
        </a>
      </Link>

      <div className={styles.links}>
        <Link href="/guide"><a>GUIDE</a></Link>
      </div>
    </div>
  )
}