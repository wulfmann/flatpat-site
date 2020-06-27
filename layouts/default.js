import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layouts/default.module.scss';

export default function({ children, title }) {
  return (
    <main>
      <Header />
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div>{children}</div>
      <Footer />
    </main>
  )
}