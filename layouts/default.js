import Header from '../components/Header';
import Footer from '../components/Footer';

export default function({ children }) {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  )
}