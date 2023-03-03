// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {movieDetails} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {movieDetails.map(eachMovieItem => (
        <MovieItem movieItem={eachMovieItem} key={eachMovieItem.id} />
      ))}
    </Slider>
  )
}

export default MovieSlider
