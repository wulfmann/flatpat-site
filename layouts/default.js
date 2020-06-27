import Header from '../components/Header';
import Footer from '../components/Footer';

export default function({ children, title }) {
  return (
    <main>
      <Header />
      <h1>{title}</h1>
      <div>{children}</div>
      <Footer />
    </main>
  )
}