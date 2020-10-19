import styles from '../styles/pages/index.module.scss'

export default function () {
  return (
    <div className={styles.container}>
      <article className={styles.text}>
        <p>Flat Pat is a social experience. A twist on <a href="https://en.wikipedia.org/wiki/Flat_Stanley">Flat Stanley</a>, Flat Pat aims to travel to as many different places as possible.</p>
        
        <p>Flat Pat is a secret from his likeness.</p>
        
        <p>We are documenting Flat Pat’s life throughout the year, and will be presenting this project as a surprise at the end of the year.</p>
        
        <p>Flat Pat comes in many forms in very limited quantities. To get flat pat, email: <a href="mailto:get@imflatpat.com">get@imflatpat.com</a></p>
        
        <p>There are only two steps to participate:</p>
        
        <ul>
          <li>1. Get Flat Pat </li>
          <li>2. Document his life with you</li>
        </ul>
        
        <p>We will post your submissions on social media, and have the chance to be selected for the Flat Pat book that will be printed at the end of the year.</p>
      </article>

      <section>
        <img src="/logo.svg" alt="Flat Pat" width="100" />
      </section>
    </div>
  );
}
