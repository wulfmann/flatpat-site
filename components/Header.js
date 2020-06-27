import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

export default function() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>
          <div className={styles.title}>FLAT PAT</div>
        </a>
      </Link>

      <div className={styles.links}>
        <Link href="/how"><a>how</a></Link>
      </div>
    </div>
  )
}