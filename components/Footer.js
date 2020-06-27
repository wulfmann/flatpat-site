import Link from 'next/link';
import styles from '../styles/components/Footer.module.scss';

export default function() {
  return (
    <div className={styles.footer}>
      <h2>FLAT PAT</h2>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
                <Link href="/guide">
          <a>Guide</a>
        </Link>
                <Link href="/gallery">
          <a>Gallery</a>
        </Link>
                <Link href="/submit">
          <a>Submit</a>
        </Link>
      </div>
    </div>
  )
}