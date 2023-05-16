import Head from 'next/head'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <>
      
      <main className={styles.main}>
      <div className={styles.footerInside}>
      <div className={styles.leftFooter}>
        <h3>Time Together</h3>

<Link href="./feedback">
<p className={styles.contactUsLink}>Contact Us</p>
</Link>
      </div>


      <div className={styles.rightFooter}>
        <p>Designed by BCIT Digital Design and Development students: <br/>
          Mariessa, Jerry, Takami, Khalil</p>
      </div>
      </div>

     
      </main>
    </>
  )
}