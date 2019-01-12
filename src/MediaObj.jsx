import React from 'react';

export default ({ type, src, description }) => {
    const Content = type;
    return <div className="media-obj">
        <Content className="media" src={src} />
        <span className="description">{description}</span>
    </div>;
};
