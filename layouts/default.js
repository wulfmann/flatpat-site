import Header from '../components/Header';

export default function({ children }) {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  )
}