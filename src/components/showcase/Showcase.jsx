import Header from '../header/Header'
import Hero from '../hero/Hero'

import Styles from './showcase.module.sass'

const Showcase = () => {
  return (
    <div className={Styles.gradient}>
      <Header />
      <Hero />
    </div>
  )
}

export default Showcase