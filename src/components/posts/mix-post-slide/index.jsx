import React from 'react';
import Image from '../../../assets/img/bg/black_white1.jpg';
import SingleMixPost from './SingleMixPost';

const MixPostSlide = () => {
	return (
		<div className="half_bg1 mix_area">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="mix_carousel">

							<div className="single_mix_carousel owl-carousel nav_style3">

								<SingleMixPost image={Image} date="March 12, 2021" category="TECHNOLOGY" title="Success is not a good food failure makes you humble" />
								<SingleMixPost image={Image} date="March 12, 2021" category="TECHNOLOGY" title="Success is not a good food failure makes you humble" />

								<SingleMixPost image={Image} date="March 12, 2021" category="TECHNOLOGY" title="Success is not a good food failure makes you humble" />

								<SingleMixPost image={Image} date="March 12, 2021" category="TECHNOLOGY" title="Success is not a good food failure makes you humble" />
								
								<SingleMixPost image={Image} date="March 12, 2021" category="TECHNOLOGY" title="Success is not a good food failure makes you humble" />

								
							</div>
						</div>

					</div>
				</div>
			</div>
			<div className="space-30"></div>
		</div>
	);
};

export default MixPostSlide;