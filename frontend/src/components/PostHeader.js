import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as moment from 'moment'
import VoteControl from '../components/VoteControl'

class PostHeader extends Component {
  render()  {
    const {post, onEditClick, onDeleteClick, onDownClick, onUpClick, onReadLaterClick, onFavoriteClick} = this.props;
    
    return (
      <div className="post"> 
        <VoteControl voteScore={post.voteScore} onDownClick={onDownClick} onUpClick={onUpClick}/>
        <div className="infos">
          <div className="actions">
            <a href="#" onClick={onEditClick}>Edit</a>
            <a href="#" onClick={onDeleteClick}>Delete</a>
            <a className="fa fa-star-o" onClick={onFavoriteClick}/>
            <a className="fa fa-bookmark-o" onClick={onReadLaterClick}/>
          </div>
          <div className="info">
            <span>{post.author} - {moment(post.timestamp).fromNow()}</span>
            <span className="tag">{post.category}</span>
          </div>
          <Link className="title" to={`/${post.category}/${post.id}`}>{post.title}</Link>
          <div className="comments-count">{post.commentCount} comments</div>
        </div>
      </div>
    )
  }
}

export default PostHeader