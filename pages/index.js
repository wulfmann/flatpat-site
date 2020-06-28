import Link from 'next/link';
import Layout from '../layouts/default';

export default function() {
  return (
    <Layout title="Flat Pat">
      <section>
        <img src="/logo.svg" alt="Flat Pat" width="100"/>
        <h2>A secret photo project chronicling the adventures of flat pat.</h2>
        <p>We have printed stickers with an illustration of Pat and are trying to make him the most well-travelled sticker in existence.<br/>Rule #1: Don't talk about Flat Pat</p>
        
        <Link href="/get">
          <a>Get Flat Pat</a>
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
            <a>View More</a>
         </Link>
        </div>
      </section>
      <section>
        <h2>Guide</h2>
        <p>Have Flat Pat, but not sure what to do next?</p>
        <Link href="/guide">
          <a>Read the Guide</a>
        </Link>
      </section>
    </Layout>
  )
}