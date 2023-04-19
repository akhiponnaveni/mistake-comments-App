// Write your code here
// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, clickLike} = props

  const {name, comment, isActive, id, date} = commentDetails

  const postedTime = formatDistanceToNow(date)

  const likeblue =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const likenormal =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const ImageUrl = isActive ? likeblue : likenormal
  const likeClass = isActive ? 'like-Class' : ''

  const onDelete = () => {
    deleteComment(id)
  }

  const onLike = () => {
    clickLike(id)
  }

  return (
    <li className="comment-main-container">
      <div className="comment-container">
        <p className="color amber">{name[0]}</p>

        <div>
          <div className="Time">
            <p className="Name">{name}</p>
            <p>{postedTime}</p>
          </div>
          <p className="Comment">{comment}</p>
        </div>
      </div>
      <div className="Items-images">
        <div>
          <img src={ImageUrl} alt="like" />
          <button
            type="button"
            className={`like-Button ${likeClass}`}
            onClick={onLike}
          >
            Like
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          alt="delete"
          className="Delete"
          data-testid="delete"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}
export default CommentItem
