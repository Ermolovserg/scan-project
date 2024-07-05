import {
  ReactComponent as PrevArrowSVG
} from '../../assets/images/prevArrow.svg'
import {
  ReactComponent as NextArrowSVG
} from '../../assets/images/nextArrow.svg'

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <NextArrowSVG />
  </div>
)

const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <div {...props}>
    <PrevArrowSVG />
  </div>
)

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

export const featuresSliderSettings = {
  ...settings,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export const histogramsSliderSettings = {
  ...settings,
  slidesToShow: 8,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
