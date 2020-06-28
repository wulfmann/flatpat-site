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
        <Link href="/submit">
          <h2>Submit your own</h2>
        </Link>
      </section>
    </Layout>
  )
}