import Link from 'next/link';
import Layout from '../../layouts/default';

export default function() {
  return (
    <Layout title="Gallery">
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
        </div>
      </section>
    </Layout>
  )
}