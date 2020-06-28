import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/layouts/default.module.scss';

export default function({ children, title, description }) {
  return (
    <main>
      <Header />

      {(title || description) && (
        <div className={styles.title}>
          {title && <h1>{title}</h1>}
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      )}

      <div>{children}</div>

      <Footer />
    </main>
  )
}