import React from 'react';
import MoreNewsItem from './MoreNews';

const MoreNews = () => {
    return (
        <div>
            <h3 className="widget-title2">More news</h3>
            <MoreNewsItem category="TECHNOLOGY" date="March 23, 2021" title="Nancy zhang a chinese busy woman and dhaka" count="1" />
            <MoreNewsItem category="BUSINESS" date="March 23, 2021" title="Nancy zhang a chinese busy woman and dhaka" count="2" />
            <MoreNewsItem category="SPORTS" date="March 23, 2021" title="Nancy zhang a chinese busy woman and dhaka" count="3" />
            <MoreNewsItem category="SHOWBIZ" date="March 23, 2021" title="Nancy zhang a chinese busy woman and dhaka" count="4" />
            <MoreNewsItem category="POLITICS" date="March 23, 2021" title="Nancy zhang a chinese busy woman and dhaka" count="5" />
        </div>
    );
};

export default MoreNews;