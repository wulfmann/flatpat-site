import Layout from '../layouts/default';
import Link from '../components/Link';

export default function() {
  return (
    <Layout title="Guide" description="I have Flat Pat. Now what?">
      <section>
        <p>Don't have Flat Pat, but want to get involved?</p>
        <Link href="/get">Get Flat Pat</Link>
      </section>

      <section>
        <h2>Assemble</h2>
        <p>Build your Flat Pat using the provided popsicle stick, or get creative!</p>
        <div className="grid">
          <div className="placeholder"></div>
                    <div className="placeholder"></div>
        </div>
      </section>
      <section>
        <h2>Capture</h2>
        <p>Photograph your Flat Pat</p>
        <div className="grid home-grid">
          <div className="placeholder"></div>
                    <div className="placeholder"></div>
        </div>
        <Link href="/gallery">See More Examples</Link>
      </section>
      <section>
        <h2>Submit</h2>
        <p>Submit your photos and videos</p>
        <Link href="/submit">Here</Link>
      </section>
    </Layout>
  )
}