import Head from 'next/head'
import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
  return (
    <>
      
      <main className={styles.main}>

<div className={styles.header}>

        <section className={styles.logo_section}>
        <Link href="/">
        <Image 
        src="/image/logo.svg"
        width = {60}
        height = {60}
        />
        </Link>
        <h1>Time Together</h1>
        </section> 

        <section className={styles.links_to_other_pages}>

          <div>
          <Link href="./video">
          <p>About</p>
          </Link>
          </div>

          
          <div>
          <Link href="./feature">
          <p>Feature</p>
          </Link>
          </div>


          <div>
          <Link href="./feedback">
          <p>Contact</p>
          </Link>  
          </div>
    

          <div>
          <Link href="./members">
          <p>Members</p>
          </Link>
          </div>

           <div>
          <Link href="https://timetogether-calender.netlify.app/">
          <p>Get the App</p>
          </Link>
           </div>    
  
        </section>
</div>
      </main>
    </>
  )
}