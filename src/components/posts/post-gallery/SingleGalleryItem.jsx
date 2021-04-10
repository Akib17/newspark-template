import React from 'react';

const SingleGalleryItem = ({image}) => {
    return (
        <div className="single_gallary_item">
            <img src={image} alt="image" />
        </div>
    );
};

export default SingleGalleryItem;