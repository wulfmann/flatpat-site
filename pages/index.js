import Link from 'next/link';
import Layout from '../layouts/default';

export default function() {
  return (
    <Layout title="Flat Pat">
      <section>
       <img src="/logo.svg" alt="Flat Pat" width="150"/>
      </section>
      <section>
        <h2>Gallery</h2>
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
        <h2>Submit</h2>
      </section>
    </Layout>
  )
}