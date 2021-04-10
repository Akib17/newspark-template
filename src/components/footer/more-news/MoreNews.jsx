import React from 'react';

const MoreNewsItem = ({ category, date, title, count }) => {
    return (
        <div className="single_extra_news border_white_bottom">
            <p>{category}  <span> /  { date}</span>
            </p>	<a href="#"> {title} </a>
            <span className="news_counter"> {count} </span>
        </div>
    );
};

export default MoreNewsItem;