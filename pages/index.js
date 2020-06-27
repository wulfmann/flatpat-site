import Link from 'next/link';

export default function() {
  return (
    <div>
      <h1>Im Flat Pat</h1>
      <p>a pat that is flat</p>
      <Link href=`/about`>   
        <a>About</a>
      </Link>
    </div>
  )
}