import Link from 'next/link';
import Layout from '../../layouts/default';

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
          <a>Get Flat Pat</a>
        </Link>
        
        <p>If you already have Flat Pat:</p>

        <Link href="/submit">
          <a>Submit your photos</a>
        </Link>
      </section>
    </Layout>
  )
}