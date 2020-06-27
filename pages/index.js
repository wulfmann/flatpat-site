import Link from 'next/link';

export default function() {
  return (
    <div>
      <h1>Im Flat Pat</h1>
      <Link href=`/about`>   
        <a>About</a>
      </Link>
    </div>
  )
}