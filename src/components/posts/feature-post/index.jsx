import React from 'react';
import FeatureImg from '../../../assets/img/feature/feature2.jpg';
import SingleFeaturePost from './SingleFeaturePost';

const FeaturePost = () => {
	return (
		<div className="feature_carousel_area mb40">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading">
							<h2 className="widget-title">Feature News</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="feature_carousel owl-carousel nav_style1">

							<SingleFeaturePost image={FeatureImg} date="March 26, 2021" category="TECHNOLOGY" title="Best garden wing supplies for the horticu ltural" />
							<SingleFeaturePost image={FeatureImg} date="March 26, 2021" category="BUSINESS" title="Best garden wing supplies for the horticu ltural" />

							<SingleFeaturePost image={FeatureImg} date="March 26, 2021" category="SHOWBIZ" title="Best garden wing supplies for the horticu ltural" />

							<SingleFeaturePost image={FeatureImg} date="March 26, 2021" category="AUTOMOBILE" title="Best garden wing supplies for the horticu ltural" />

							<SingleFeaturePost image={FeatureImg} date="March 26, 2021" category="TECHNOLOGY" title="Best garden wing supplies for the horticu ltural" />

							<SingleFeaturePost image={FeatureImg} date="March 26, 2021" category="TECHNOLOGY" title="Best garden wing supplies for the horticu ltural" />


						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturePost;