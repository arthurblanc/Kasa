import React, { useState } from 'react'
import sliderPrevious from '../../assets/sliderPrevious.svg'
import sliderNext from '../../assets/sliderNext.svg'
import './style.scss'

function ImageSlider({ images, alt }) {
	const [current, setCurrent] = useState(0)
	const length = images.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const previousSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(images) || length <= 0) {
		return null
	}

	return (
		<div className="slider">
			{length > 1 ? (
				<img
					src={sliderPrevious}
					className="left-arrow"
					onClick={previousSlide}
					alt="Previous Arrow"
				/>
			) : null}
			{length > 1 ? (
				<img
					src={sliderNext}
					className="right-arrow"
					onClick={nextSlide}
					alt="Next Arrow"
				/>
			) : null}
			{images.map((slider, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={index}
					>
						{index === current && (
							<img
								src={slider}
								alt={'slide ' + (parseInt(index) + 1)}
								className="image"
							/>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default ImageSlider
