import Link from 'next/link';
// import { useRouter } from 'next/router';
import Layout from '../layouts/default';
import styles from '../styles/pages/gallery-item.module.scss';

export default function() {

  const data = {
    title: 'Post',
    caption: 'Flat Pat caption',
    name: 'Flat Pat',
    src: ''
  };

  return (
    <Layout title={data.title}>
      <section>
        <div className="placeholder"></div>
        <div className={styles.caption}>{data.caption}</div>
         <div className={styles.name}>{data.name}</div>
      </section>
    </Layout>
  )
}