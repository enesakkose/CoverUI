import MainContainer from '@/containers/MainContainer'
import Header from '@/components/Header'
import BrandText from '@/components/BrandText'
import styles from './page.module.scss'

function Home() {
  return (
    <MainContainer as='main' className={styles.main}>
      <Header />
      <section className={styles.hero}>
        <h1 className={styles.heading}>
          Create your new components <br /> with
          <BrandText variant='lg' className={styles.lgBrandText} />
        </h1>
        <BrandText variant='xl' className={styles.xlBrandText} />
      </section>
    </MainContainer>
  )
}

export default Home
