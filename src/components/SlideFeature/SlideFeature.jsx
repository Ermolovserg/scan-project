import styles from './slide-feature.module.scss'

const SlideFeature = ({ slide: { icon, desc } }) => {
  return (
    <div className={styles.slide}>
      <img src={icon} alt="icon" />
      <p>{desc}</p>
    </div>
  )
}

export default SlideFeature
