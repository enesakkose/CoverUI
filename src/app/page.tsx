import MainContainer from '@/containers/MainContainer'
import BrandText from '@/components/BrandText'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Link from 'next/link'
import ButtonWithIcon from '@/components/ButtonWithIcon'
import styles from './page.module.scss'

function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>
        Create your new components <br /> with{' '}
        <BrandText size='lg' className={styles.lgBrandText} />
      </h1>
      <div className={styles.startButtons}>
        <Button asChild variant='primary' size='md'>
          <Link href='/docs'>Get Started</Link>
        </Button>
        <ButtonWithIcon asChild variant='outline' size='md'>
          <Link href='https://github.com/enesakkose/cover-ui' target='_blank'>
            <Icon icon='github' size='22' />
            Github
          </Link>
        </ButtonWithIcon>
      </div>
      <BrandText size='xl' className={styles.xlBrandText} />
    </div>
  )
}

export default Home
