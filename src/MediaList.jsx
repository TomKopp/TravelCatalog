import MediaObj from './MediaObj';
import React from 'react';

export default ({ children }) => <ul className="media-list">
    {children.map((item, key) => <li key={key} className="media-item"><MediaObj {...item} /></li>)}
</ul>;
