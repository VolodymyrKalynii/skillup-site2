import React from 'react';
import PropTypes from 'prop-types';

import {Comment} from './comment/Comment';

export const Comments = ({commentsList = []}) => {
    console.log('items');

    return (
        <ul>{commentsList.map((item) => 
            <li key={item.id} ><Comment {...item} /></li>)}
        </ul>
    );
};

Comments.propTypes = {
    commentsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            isLiked: PropTypes.bool.isRequired
        })
    ).isRequired
};
