import Link from 'next/link';
import Layout from '../layouts/default';

export default function() {
  return (
    <Layout title="Flat Pat">
      <div className="center">
       <img src="/logo.svg" alt="Flat Pat" width="150"/>
      </div>
    </Layout>
  )
}