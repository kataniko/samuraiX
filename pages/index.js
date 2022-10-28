import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className='min-h-screen bg-[#17171A]'>
          <Header />
          <div className='mt-10'/>
          {/* trends */}
          <div className='mt-20'/>
          {/* table */}
        </div>
    </div>
  )
}
