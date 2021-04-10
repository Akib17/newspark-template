import React from 'react';
import Image from '../../../../assets/img/entertrainment/enter1.jpg';
import SingleEntertainmentPost from '../single-post-type/SingleEntertainmentPost';

const EntertainmentNews = () => {
    return (
        <div className="entertrainment_item">
            <div className="row justify-content-center">

                <SingleEntertainmentPost image={Image} category="BUSINESS" date="April 1, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                <SingleEntertainmentPost image={Image} category="TECHNOLOGY" date="April 1, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                <SingleEntertainmentPost image={Image} category="SHOWBIZ" date="April 1, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                <SingleEntertainmentPost image={Image} category="POLITICS" date="April 1, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />


            </div>
        </div>
    );
};

export default EntertainmentNews;