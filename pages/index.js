import Link from 'next/link';
import Layout from '../layouts/default';
import styles from '../styles/pages/index.module.scss';

export default function() {
  return (
    <Layout>
      <section>
        <img src="/logo.svg" alt="Flat Pat" width="100"/>
        <h2>FLAT PAT</h2>
        <h3>A secret photo project chronicling the adventures of flat pat.</h3>
        <p>We have printed stickers with an illustration of Pat and are trying to get pictures of him in as many places as possible.<br/><br/>Rule #1: Don't talk about Flat Pat</p>
        
        <p>Want to get involved yourself?</p>

        <Link href="/get">
          <a className={styles.link}>Get Flat Pat</a>
        </Link>
      </section>

      <section>
        <h2>Where is Flat Pat?</h2>
        <div className="grid home-grid">
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

        <div className="home-link">
         <Link href="/gallery">
            <a className={styles.link}>View More</a>
         </Link>
        </div>
      </section>

      <section>
        <h2>Guide</h2>
        <p>Have Flat Pat, but not sure what to do next?</p>
        <Link href="/guide">
          <a className={styles.link}>Read the Guide</a>
        </Link>
      </section>
    </Layout>
  )
}