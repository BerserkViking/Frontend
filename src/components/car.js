
import logoOne from './Images/intel_hackathon.png'
import logoTwo from './Images/outr_hackathon.png'
import logoThree from './Images/quantam_hackathon.png'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	CarouselControl,
	Carousel,
	CarouselItem,
	CarouselIndicators,
	Row,
	Col
} from 'reactstrap';

function App() {

	// State for Active index
	const [activeIndex, setActiveIndex] = React.useState(0);

	// State for Animation
	const [animating, setAnimating] = React.useState(false);

	// Sample items for Carousel
	const items = [
		{
			caption: 'Sample Caption One',
			src:logoOne,
			altText: 'Slide One',
            title: 'Intel Hackathon'
		},
		{
			caption: 'Sample Caption Two',
			src:logoTwo,
			altText: 'Slide Two',
			title: 'Outr Hackathon'
		},
		{
			caption: 'Sample Caption Two',
			src:logoThree,
			altText: 'Slide Three',
			title: 'Quantam Hackathon'

		}
	];

	// Items array length
	const itemLength = items.length - 1

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ?
			itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ?
			0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	// Carousel Item Data
	const carouselItemData = items.map((item,i) => {
		return (
			<CarouselItem
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}
			>
				<Row>
					<Col><img src={item.src} className="img-fluid img-thumbnail rounded mx-auto d-block"></img></Col>
					<Col className='m-4' md={6}>
					<h3 className='font-monospace fw-bold'>{item.title}</h3>
					<p className='fst-italic'>
					Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California. It is the world's largest semiconductor chip manufacturer by revenue, and is one of the developers of the x86 series of instruction sets, the instruction sets found in most personal 
					</p>
				
					</Col>
				</Row>
			</CarouselItem>
		);
	});


	return (
		<div >
			<Carousel previous={previousButton} next={nextButton}
				activeIndex={activeIndex} className="carousel-dark">
				<CarouselIndicators items={items}
					activeIndex={activeIndex}
					onClickHandler={(newIndex) => {
						if (animating) return;
						setActiveIndex(newIndex);
					}} />
				{carouselItemData}
				<CarouselControl directionText="Prev"
					direction="prev" onClickHandler={previousButton} />
				<CarouselControl directionText="Next"
					direction="next" onClickHandler={nextButton} />
			</Carousel>
		</div >
	);
}

export default App;
