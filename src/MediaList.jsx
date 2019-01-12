import MediaObj from './MediaObj';
import React from 'react';

export default ({ children }) => <ul className="media-list">
    {children.map((el, key) => <li key={key} className="media-item"><MediaObj {...el} /></li>)}
</ul>;
