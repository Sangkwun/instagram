import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PhotoComment = props => (
    <div>
        <ul>
            <Comment username={props.username} comment={props.caption} />
            {props.comments.map(comment => (
                    <Comment username={comment.creator.username} comment={comment.message} key={comment.id} />
                )
            )} 
        </ul>
    </div>
);

const Comment = props => (
    <li>
      <span>{props.username}</span>
      <span>{props.comment}</span>
    </li>
)

PhotoComment.propTypes = {
  caption: PropTypes.string.isRequired,
  creator: PropTypes.shape({
    profile_image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  )
};

export default PhotoComment;