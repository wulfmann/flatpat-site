import Link from 'next/link';
import styles from './styles/components/Header.component.scss';

export default function() {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        FLAT PAT
      </div>
      <div className={styles.links}>
        <Link href="/how"><a>how</a></Link>
      </div>
    </div>
  )
}