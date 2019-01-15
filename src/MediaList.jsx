import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import React from 'react';

export default ({ children }) => <GridList className="media-list" cols={1} cellHeight={'auto'}>
    {children.map(({ type, src, description }, key) => {
        const Content = type;
        return <GridListTile key={key} className="media-list-tile">
            <Content className="media-list-tile-media" src={src} />
            <GridListTileBar className="media-list-tile-description" title={description} />
        </GridListTile>;
    })}
</GridList>;
