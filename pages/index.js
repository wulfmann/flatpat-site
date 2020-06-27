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
        <div className="grid">
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </div>
      </section>
    </Layout>
  )
}