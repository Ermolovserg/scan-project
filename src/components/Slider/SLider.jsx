import SlickSlider from 'react-slick'
import '../../scss/_slick-carousel.scss'

const Slider = ({ className, slideComponent, slides, settings }) => {
  const Component = slideComponent

  return (
    <SlickSlider className={className} {...settings}>
      {slides &&
        slides.map((slide) => {
            return <Component key={slide.id || slide.date} slide={slide} />
          })
      }
    </SlickSlider>
  )
}

export default Slider
