import Link from 'next/link';
import styles from '../styles/components/Link.module.scss';

export default function({ href, children }) {
  return (
    <Link href={href}>
      <a className={styles.link}>
        {children}
      </a>
    </Link>
  )
}
