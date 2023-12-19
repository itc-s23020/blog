import Link from 'next/link'
import styles from 'styles/logo.module.css'
const Logo = ({ boxOn = false }) => {
  return (
    <Link href='/'>
      <href className={boxOn ? styles.box : styles.basic}>CUBE</href>
    </Link>
  )
}
export default Logo
