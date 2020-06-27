import Layout from '../layouts/default';
import Link from '../components/Link';

export default function() {
  return (
    <Layout title="Guide">
      <section>
        <h2>Assemble</h2>
        <p>Assemble your flatpat using the provided popsicle stick, or get creative!</p>
      </section>
      <section>
        <h2>Photograph</h2>
        <p>Photograph your flatpat</p>
        <Link href="/examples">See Examples</Link>
      </section>
      <section>
        <h2>Submit</h2>
        <p>Submit your flatpat</p>
        <Link href="/submit">Submit</Link>
      </section>
    </Layout>
  )
}