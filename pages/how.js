import Layout from '../layouts/default';
import Link from '../components/Link';

export default function() {
  return (
    <Layout title="How">
      <section>
        <h2>Assemble</h2>
        <p>Assemble your flatpat.</p>
      </section>
      <section>
        <h2>Photograph</h2>
        <p>Photograph your flatpat</p>
      </section>
      <section>
        <h2>Submit</h2>
        <p>Submit your flatpat</p>
        <Link href="/submit">Submit</Link>
      </section>
    </Layout>
  )
}