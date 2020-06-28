import Link from 'next/link';
import Layout from '../layouts/default';

export default function() {
  function onSubmit(e) {
    e.preventDefault();
    alert('Thank you for submitting your request for a Flat Pat. We will contact you when we have reviewed your submission');
  }

  return (
    <Layout title="Get Flat Pat">
      <section>
        <p>
          Fill out the following form to get involved:
        </p>
        
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text"></input>
          
          <label>Email</label>
          <input type="text"></input>
          
          <input type="submit"></input>
        </form>
      </section>
    </Layout>
  )
}