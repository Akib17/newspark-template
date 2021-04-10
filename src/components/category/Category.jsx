import React from 'react';

const Category = ({name, Icon}) => {
    return (
        <li>
            <a href="#" >	<span>Restaurant</span>
                <img src={Icon} alt="" />
            </a>
        </li>
    );
};

export default Category;