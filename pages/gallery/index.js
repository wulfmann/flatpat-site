import Link from 'next/link';
import Layout from '../../layouts/default';
import styles from '../../styles/pages/gallery.module.scss';

export default function() {
  return (
    <Layout title="Where is Flat Pat?">
      <section>
        <div className="grid">
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
          <Link href="/gallery/1">
            <div className="placeholder"></div>
          </Link>
        </div>
      </section>

      <section>
        <h2>Want to get involved?</h2>
        
        <Link href="/get">
          <a className={styles.link}>Get Flat Pat</a>
        </Link>
        
        <p>If you already have Flat Pat:</p>

        <Link href="/submit">
          <a className={styles.link}>Submit your photos</a>
        </Link>
      </section>
    </Layout>
  )
}