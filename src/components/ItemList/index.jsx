import React from 'react';
import './styles.css';

function ItemList({ title, description, username }) {

    var url = `https://github.com/${username}`;
    return (
        <div className='item-list'>
            <a href={url} target="_blank" >
                {title}
            </a>
            <p>{description}</p>
            <hr />
        </div>
    )
}

export default ItemList;