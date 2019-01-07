import React from 'react';

export default ({ type, src, description }) => {
    const Content = type;
    return <section className="media-obj">
        <Content className="media" src={src} />
        <span className="description">{description}</span>
    </section>;
};
