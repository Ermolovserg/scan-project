import classNames from 'classnames'
import '../../scss/_slick-carousel.scss'
import './_custom-styles.scss'
import styles from './histogramms-slider.module.scss'
import { histogramsSliderSettings } from '../Slider/settings'
import Slider from '../Slider/SLider'
import SlideHistograms from '../SlideHistograms/SlideHistograms'

const titles = [ 'Период', 'Всего', 'Риски' ]

const HistogramsSlider = ({ className, slides }) => {
  const sliderClass = classNames('histograms-slider', className)
  return (
    <div className={styles.wrap}>
      <Slider
        className={sliderClass}
        settings={histogramsSliderSettings}
        slideComponent={SlideHistograms}
        slides={slides}
      />

      <div className={styles.titles}>
        {titles.map((title) => (
          <p key={title} className={styles.title}>
            {title}
          </p>
        ))}
      </div>
    </div>
  )
}

export default HistogramsSlider
